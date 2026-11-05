import{j as e,a6 as g,L as m,i as f,k as P,J as b,G as w,y as h,ac as S,ad as y,a8 as x,a as k}from"./ui-C9KrBvbE.js";import{r as v}from"./vendor-C-RugAsD.js";/* empty css              */import{u as C,a as E,R as T,B as N,C as D,c as R}from"./reactflow-Bog5v55p.js";import{C as M}from"./CodeBlock-B1pjjoNU.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const I=[{id:"elevator",title:"Elevator System",difficulty:"Medium",description:"Design a control system for a building with M floors and N elevators.",requirements:["Handle user requests from inside and outside the elevator","Optimize for minimal wait time and efficient routing","Handle emergency states and door operations","Scalable to multiple elevators","Support different scheduling algorithms (FCFS, SCAN, LOOK)","Thread-safe operations for concurrent requests"],designPatterns:[{name:"Singleton",usage:"ElevatorController ensures single point of control"},{name:"Strategy",usage:"Different scheduling algorithms (FCFS, SCAN, LOOK)"},{name:"State",usage:"Elevator states (IDLE, MOVING_UP, MOVING_DOWN, STOPPED)"},{name:"Observer",usage:"Notify displays when elevator position changes"}],classRelationships:["ElevatorController HAS-MANY Elevator (1 to N)","ElevatorController HAS-ONE SchedulingStrategy (1 to 1)","Elevator HAS-MANY Request (1 to N)","Elevator HAS-ONE Door (1 to 1)","Elevator HAS-ONE Display (1 to 1)","Request IS-A (InternalRequest, ExternalRequest)","SchedulingStrategy IS-A (FCFSStrategy, SCANStrategy, LOOKStrategy)"],tradeoffs:[{aspect:"Scheduling Algorithm",options:"FCFS vs SCAN vs LOOK",tradeoff:"FCFS is simple but inefficient. SCAN/LOOK optimize travel but may delay some requests."},{aspect:"Thread Safety",options:"Synchronized methods vs ReentrantLock vs Concurrent Collections",tradeoff:"Synchronized is simple but less flexible. ReentrantLock offers timeouts and fairness. Concurrent collections reduce contention."},{aspect:"Request Queue",options:"Single queue vs Separate up/down queues",tradeoff:"Single queue is simpler. Separate queues allow better optimization for direction-based scheduling."},{aspect:"Scalability",options:"Centralized vs Distributed control",tradeoff:"Centralized is easier to implement. Distributed scales better for large buildings but adds complexity."}],classDiagram:`
┌─────────────────────────┐
│  ElevatorController     │
│  (Singleton)            │
├─────────────────────────┤
│ - elevators: List       │
│ - strategy: Strategy    │
├─────────────────────────┤
│ + getInstance()         │
│ + handleRequest()       │
│ + assignElevator()      │
└───────┬─────────────────┘
        │ 1
        │ controls
        │ *
┌───────▼─────────────────┐
│      Elevator           │
├─────────────────────────┤
│ - id: int               │
│ - currentFloor: int     │
│ - state: ElevatorState  │
│ - direction: Direction  │
│ - requests: PriorityQueue│
│ - door: Door            │
├─────────────────────────┤
│ + move()                │
│ + addRequest()          │
│ + processRequests()     │
└─────────────────────────┘
        │ 1
        │ has
        │ *
┌───────▼─────────────────┐
│      Request            │
├─────────────────────────┤
│ - floor: int            │
│ - direction: Direction  │
│ - timestamp: long       │
└─────────────────────────┘
`,classes:[{name:"ElevatorController",description:"Singleton controller managing all elevators and request dispatching",code:`// Singleton Pattern - Centralized Control
public class ElevatorController {
    private static ElevatorController instance;
    private List<Elevator> elevators;
    private SchedulingStrategy strategy;

    private ElevatorController(int numElevators, SchedulingStrategy strategy) {
        this.elevators = new ArrayList<>();
        this.strategy = strategy;
        for (int i = 0; i < numElevators; i++) {
            elevators.add(new Elevator(i));
        }
    }

    // Thread-safe singleton
    public static synchronized ElevatorController getInstance(int numElevators, SchedulingStrategy strategy) {
        if (instance == null) {
            instance = new ElevatorController(numElevators, strategy);
        }
        return instance;
    }

    // Handle external requests (from floor buttons)
    public void handleExternalRequest(int floor, Direction direction) {
        Elevator bestElevator = strategy.selectElevator(elevators, floor, direction);
        bestElevator.addRequest(new ExternalRequest(floor, direction));
    }

    // Handle internal requests (from inside elevator)
    public void handleInternalRequest(int elevatorId, int floor) {
        Elevator elevator = elevators.get(elevatorId);
        elevator.addRequest(new InternalRequest(floor));
    }

    public void setStrategy(SchedulingStrategy strategy) {
        this.strategy = strategy;
    }
}`},{name:"Elevator",description:"Represents individual elevator with state management and request processing",code:`// State Pattern - Manages elevator states
public class Elevator implements Runnable {
    private final int id;
    private int currentFloor;
    private ElevatorState state;
    private Direction direction;
    private PriorityQueue<Request> upRequests;
    private PriorityQueue<Request> downRequests;
    private Door door;
    private Display display;

    public Elevator(int id) {
        this.id = id;
        this.currentFloor = 0;
        this.state = ElevatorState.IDLE;
        this.direction = Direction.NONE;

        // Min heap for up direction, max heap for down
        this.upRequests = new PriorityQueue<>(Comparator.comparingInt(Request::getFloor));
        this.downRequests = new PriorityQueue<>((a, b) -> b.getFloor() - a.getFloor());

        this.door = new Door();
        this.display = new Display(id);
    }

    public synchronized void addRequest(Request request) {
        if (request.getDirection() == Direction.UP ||
            (request instanceof InternalRequest && request.getFloor() > currentFloor)) {
            upRequests.offer(request);
        } else {
            downRequests.offer(request);
        }
        notifyAll(); // Wake up the elevator thread
    }

    @Override
    public void run() {
        while (true) {
            try {
                processRequests();
                Thread.sleep(100); // Simulate elevator speed
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }

    private synchronized void processRequests() throws InterruptedException {
        if (upRequests.isEmpty() && downRequests.isEmpty()) {
            state = ElevatorState.IDLE;
            wait(); // Wait for new requests
            return;
        }

        // Determine direction based on current requests
        if (direction == Direction.NONE || direction == Direction.UP) {
            if (!upRequests.isEmpty()) {
                direction = Direction.UP;
                processUpRequests();
            } else if (!downRequests.isEmpty()) {
                direction = Direction.DOWN;
                processDownRequests();
            }
        } else {
            if (!downRequests.isEmpty()) {
                direction = Direction.DOWN;
                processDownRequests();
            } else if (!upRequests.isEmpty()) {
                direction = Direction.UP;
                processUpRequests();
            }
        }
    }

    private void processUpRequests() throws InterruptedException {
        state = ElevatorState.MOVING_UP;
        while (!upRequests.isEmpty() && upRequests.peek().getFloor() >= currentFloor) {
            Request request = upRequests.peek();
            moveToFloor(request.getFloor());

            if (currentFloor == request.getFloor()) {
                upRequests.poll();
                stopAtFloor();
            }
        }

        if (upRequests.isEmpty()) {
            direction = Direction.NONE;
        }
    }

    private void processDownRequests() throws InterruptedException {
        state = ElevatorState.MOVING_DOWN;
        while (!downRequests.isEmpty() && downRequests.peek().getFloor() <= currentFloor) {
            Request request = downRequests.peek();
            moveToFloor(request.getFloor());

            if (currentFloor == request.getFloor()) {
                downRequests.poll();
                stopAtFloor();
            }
        }

        if (downRequests.isEmpty()) {
            direction = Direction.NONE;
        }
    }

    private void moveToFloor(int targetFloor) throws InterruptedException {
        while (currentFloor != targetFloor) {
            if (currentFloor < targetFloor) {
                currentFloor++;
                state = ElevatorState.MOVING_UP;
            } else {
                currentFloor--;
                state = ElevatorState.MOVING_DOWN;
            }
            display.update(currentFloor, state);
            Thread.sleep(1000); // 1 second per floor
        }
    }

    private void stopAtFloor() throws InterruptedException {
        state = ElevatorState.STOPPED;
        display.update(currentFloor, state);
        door.open();
        Thread.sleep(2000); // Wait for passengers
        door.close();
    }

    public int getCurrentFloor() {
        return currentFloor;
    }

    public ElevatorState getState() {
        return state;
    }

    public Direction getDirection() {
        return direction;
    }

    public int getId() {
        return id;
    }
}`},{name:"Request (Abstract)",description:"Base class for elevator requests with common properties",code:`// Abstract base class for requests
public abstract class Request {
    protected int floor;
    protected long timestamp;

    public Request(int floor) {
        this.floor = floor;
        this.timestamp = System.currentTimeMillis();
    }

    public int getFloor() {
        return floor;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public abstract Direction getDirection();
}`},{name:"InternalRequest",description:"Request from inside the elevator (destination floor)",code:`// Internal request - from inside elevator
public class InternalRequest extends Request {

    public InternalRequest(int floor) {
        super(floor);
    }

    @Override
    public Direction getDirection() {
        return Direction.NONE; // Direction determined by elevator position
    }

    @Override
    public String toString() {
        return "InternalRequest{floor=" + floor + "}";
    }
}`},{name:"ExternalRequest",description:"Request from outside the elevator (floor button press)",code:`// External request - from floor buttons
public class ExternalRequest extends Request {
    private Direction direction;

    public ExternalRequest(int floor, Direction direction) {
        super(floor);
        this.direction = direction;
    }

    @Override
    public Direction getDirection() {
        return direction;
    }

    @Override
    public String toString() {
        return "ExternalRequest{floor=" + floor + ", direction=" + direction + "}";
    }
}`},{name:"SchedulingStrategy (Interface)",description:"Strategy pattern for different elevator selection algorithms",code:`// Strategy Pattern - Pluggable scheduling algorithms
public interface SchedulingStrategy {
    Elevator selectElevator(List<Elevator> elevators, int floor, Direction direction);
}`},{name:"FCFSStrategy",description:"First Come First Serve - assigns first available elevator",code:`// FCFS - Simple but not optimal
public class FCFSStrategy implements SchedulingStrategy {

    @Override
    public Elevator selectElevator(List<Elevator> elevators, int floor, Direction direction) {
        // Return first idle elevator, or first one
        for (Elevator elevator : elevators) {
            if (elevator.getState() == ElevatorState.IDLE) {
                return elevator;
            }
        }
        return elevators.get(0);
    }
}`},{name:"SCANStrategy",description:"SCAN algorithm - elevator continues in same direction until no more requests",code:`// SCAN (Elevator Algorithm) - More efficient
public class SCANStrategy implements SchedulingStrategy {

    @Override
    public Elevator selectElevator(List<Elevator> elevators, int floor, Direction direction) {
        Elevator bestElevator = null;
        int minDistance = Integer.MAX_VALUE;

        for (Elevator elevator : elevators) {
            // Prefer elevators already moving in the requested direction
            if (elevator.getDirection() == direction || elevator.getDirection() == Direction.NONE) {
                int distance = Math.abs(elevator.getCurrentFloor() - floor);

                // If elevator is moving toward the request floor
                if (isMovingToward(elevator, floor, direction)) {
                    distance /= 2; // Give preference
                }

                if (distance < minDistance) {
                    minDistance = distance;
                    bestElevator = elevator;
                }
            }
        }

        return bestElevator != null ? bestElevator : elevators.get(0);
    }

    private boolean isMovingToward(Elevator elevator, int floor, Direction direction) {
        int currentFloor = elevator.getCurrentFloor();
        Direction elevatorDir = elevator.getDirection();

        if (elevatorDir == Direction.UP && direction == Direction.UP) {
            return currentFloor <= floor;
        } else if (elevatorDir == Direction.DOWN && direction == Direction.DOWN) {
            return currentFloor >= floor;
        }
        return false;
    }
}`},{name:"Enums",description:"Enum definitions for elevator states and directions",code:`// Elevator state enumeration
public enum ElevatorState {
    IDLE,
    MOVING_UP,
    MOVING_DOWN,
    STOPPED,
    MAINTENANCE,
    EMERGENCY
}

// Direction enumeration
public enum Direction {
    UP,
    DOWN,
    NONE
}`},{name:"Door",description:"Manages elevator door operations",code:`// Door management
public class Door {
    private DoorState state;

    public Door() {
        this.state = DoorState.CLOSED;
    }

    public void open() throws InterruptedException {
        if (state == DoorState.CLOSED) {
            System.out.println("Door opening...");
            Thread.sleep(500); // Door opening time
            state = DoorState.OPEN;
            System.out.println("Door opened");
        }
    }

    public void close() throws InterruptedException {
        if (state == DoorState.OPEN) {
            System.out.println("Door closing...");
            Thread.sleep(500); // Door closing time
            state = DoorState.CLOSED;
            System.out.println("Door closed");
        }
    }

    public boolean isOpen() {
        return state == DoorState.OPEN;
    }

    public enum DoorState {
        OPEN,
        CLOSED,
        OPENING,
        CLOSING
    }
}`},{name:"Display",description:"Observer pattern - displays current elevator status",code:`// Observer Pattern - Display updates
public class Display {
    private final int elevatorId;
    private int currentFloor;
    private ElevatorState state;

    public Display(int elevatorId) {
        this.elevatorId = elevatorId;
    }

    public void update(int floor, ElevatorState state) {
        this.currentFloor = floor;
        this.state = state;
        display();
    }

    private void display() {
        System.out.printf("[Elevator %d] Floor: %d, State: %s%n",
            elevatorId, currentFloor, state);
    }
}`}],interviewTips:["Start with clarifying questions: number of floors, elevators, capacity limits","Discuss thread safety - elevators run concurrently","Mention different scheduling algorithms and their tradeoffs","Consider edge cases: emergency stops, door sensor failures, power outage","Discuss extensibility: adding new features like VIP mode, energy optimization"]},{id:"parking-lot",title:"Parking Lot System",difficulty:"Easy",description:"Design a multi-level parking lot management system with different spot types.",requirements:["Support multiple vehicle types (Motorcycle, Car, Bus/Truck)","Multiple floors with different spot sizes (Compact, Large, Handicapped)","Automated ticket issuance and payment calculation","Real-time availability tracking per floor and spot type","Entry and exit gates with validation","Hourly rate calculation with spot-type pricing","Persist parking history and generate reports"],designPatterns:[{name:"Singleton",usage:"ParkingLot ensures single instance per building"},{name:"Factory",usage:"SpotFactory creates appropriate spot types"},{name:"Strategy",usage:"Different parking strategies (Nearest, Random, Optimized)"},{name:"Observer",usage:"Notify displays when spot availability changes"}],classRelationships:["ParkingLot HAS-MANY ParkingFloor (1 to N)","ParkingFloor HAS-MANY ParkingSpot (1 to N)","ParkingSpot IS-A (CompactSpot, LargeSpot, HandicappedSpot)","Vehicle IS-A (Motorcycle, Car, Truck)","Ticket BELONGS-TO Vehicle (1 to 1)","ParkingLot HAS-MANY Gate (Entry/Exit)","PaymentProcessor USES PricingStrategy"],tradeoffs:[{aspect:"Spot Assignment",options:"Nearest vs Random vs Load Balanced",tradeoff:"Nearest minimizes walking but clusters usage. Random spreads load. Load balanced optimizes space but complex."},{aspect:"Pricing Model",options:"Flat rate vs Hourly vs Dynamic pricing",tradeoff:"Flat is simple. Hourly is fair. Dynamic maximizes revenue but complex and may frustrate customers."},{aspect:"Data Storage",options:"In-memory vs Database",tradeoff:"In-memory is fast but volatile. Database persists data but slower. Hybrid approach balances both."},{aspect:"Concurrency",options:"Pessimistic locking vs Optimistic locking",tradeoff:"Pessimistic prevents conflicts but reduces throughput. Optimistic allows concurrency but may require retries."}],classDiagram:`
┌─────────────────────────┐
│     ParkingLot          │
│     (Singleton)         │
├─────────────────────────┤
│ - floors: List          │
│ - gates: List           │
│ - activeTickets: Map    │
├─────────────────────────┤
│ + parkVehicle()         │
│ + removeVehicle()       │
│ + isFull()              │
└───────┬─────────────────┘
        │ 1
        │ has
        │ *
┌───────▼─────────────────┐
│    ParkingFloor         │
├─────────────────────────┤
│ - floorNumber: int      │
│ - spots: Map<SpotType>  │
├─────────────────────────┤
│ + findSpot()            │
│ + getAvailableCount()   │
└───────┬─────────────────┘
        │ 1
        │ contains
        │ *
┌───────▼─────────────────┐
│    ParkingSpot          │
│    (Abstract)           │
├─────────────────────────┤
│ - id: String            │
│ - type: SpotType        │
│ - vehicle: Vehicle      │
│ - isOccupied: boolean   │
├─────────────────────────┤
│ + canFitVehicle()       │
│ + assignVehicle()       │
└─────────────────────────┘
`,classes:[{name:"ParkingLot",description:"Singleton class managing the entire parking lot system",code:`// Singleton Pattern - Single parking lot instance
public class ParkingLot {
    private static ParkingLot instance;
    private final String name;
    private final List<ParkingFloor> floors;
    private final List<EntryGate> entryGates;
    private final List<ExitGate> exitGates;
    private final Map<String, Ticket> activeTickets;
    private final ParkingStrategy strategy;
    private final PaymentProcessor paymentProcessor;

    private ParkingLot(String name, int numFloors, int spotsPerFloor) {
        this.name = name;
        this.floors = new ArrayList<>();
        this.entryGates = new ArrayList<>();
        this.exitGates = new ArrayList<>();
        this.activeTickets = new ConcurrentHashMap<>();
        this.strategy = new NearestSpotStrategy();
        this.paymentProcessor = new PaymentProcessor(new HourlyPricingStrategy());

        // Initialize floors
        for (int i = 0; i < numFloors; i++) {
            floors.add(new ParkingFloor(i, spotsPerFloor));
        }

        // Initialize gates
        entryGates.add(new EntryGate("ENTRY-1", this));
        exitGates.add(new ExitGate("EXIT-1", this));
    }

    public static synchronized ParkingLot getInstance(String name, int floors, int spotsPerFloor) {
        if (instance == null) {
            instance = new ParkingLot(name, floors, spotsPerFloor);
        }
        return instance;
    }

    // Main parking operation
    public synchronized Ticket parkVehicle(Vehicle vehicle) throws ParkingFullException {
        if (isFull(vehicle.getType())) {
            throw new ParkingFullException("No available spots for " + vehicle.getType());
        }

        ParkingSpot spot = strategy.findSpot(floors, vehicle);
        if (spot == null) {
            throw new ParkingFullException("Unable to find suitable spot");
        }

        spot.assignVehicle(vehicle);
        Ticket ticket = new Ticket(vehicle, spot);
        activeTickets.put(ticket.getTicketId(), ticket);

        System.out.printf("Vehicle %s parked at %s%n",
            vehicle.getLicensePlate(), spot.getId());

        return ticket;
    }

    // Vehicle removal and payment
    public synchronized Receipt removeVehicle(String ticketId) throws InvalidTicketException {
        Ticket ticket = activeTickets.get(ticketId);
        if (ticket == null) {
            throw new InvalidTicketException("Invalid ticket ID: " + ticketId);
        }

        ticket.setExitTime(System.currentTimeMillis());
        ParkingSpot spot = ticket.getSpot();
        spot.removeVehicle();

        double amount = paymentProcessor.calculateFee(ticket);
        Receipt receipt = new Receipt(ticket, amount);

        activeTickets.remove(ticketId);

        System.out.printf("Vehicle %s exited. Amount due: $%.2f%n",
            ticket.getVehicle().getLicensePlate(), amount);

        return receipt;
    }

    public boolean isFull(VehicleType type) {
        return floors.stream()
            .allMatch(floor -> floor.getAvailableSpots(type) == 0);
    }

    public int getAvailableSpots(VehicleType type) {
        return floors.stream()
            .mapToInt(floor -> floor.getAvailableSpots(type))
            .sum();
    }

    public void displayAvailability() {
        System.out.println("\\n=== Parking Availability ===");
        for (ParkingFloor floor : floors) {
            floor.displayAvailability();
        }
    }
}`},{name:"ParkingFloor",description:"Represents a single floor with multiple parking spots",code:`public class ParkingFloor {
    private final int floorNumber;
    private final Map<SpotType, List<ParkingSpot>> spots;
    private final Map<SpotType, AtomicInteger> availableCount;

    public ParkingFloor(int floorNumber, int totalSpots) {
        this.floorNumber = floorNumber;
        this.spots = new EnumMap<>(SpotType.class);
        this.availableCount = new EnumMap<>(SpotType.class);

        // Initialize spots with distribution: 40% compact, 40% large, 20% handicapped
        for (SpotType type : SpotType.values()) {
            spots.put(type, new ArrayList<>());
            availableCount.put(type, new AtomicInteger(0));
        }

        int compactCount = (int)(totalSpots * 0.4);
        int largeCount = (int)(totalSpots * 0.4);
        int handicappedCount = totalSpots - compactCount - largeCount;

        createSpots(SpotType.COMPACT, compactCount);
        createSpots(SpotType.LARGE, largeCount);
        createSpots(SpotType.HANDICAPPED, handicappedCount);
    }

    private void createSpots(SpotType type, int count) {
        for (int i = 0; i < count; i++) {
            String spotId = String.format("F%d-%s-%03d", floorNumber, type, i);
            ParkingSpot spot = SpotFactory.createSpot(spotId, type);
            spots.get(type).add(spot);
            availableCount.get(type).incrementAndGet();
        }
    }

    public ParkingSpot findAvailableSpot(VehicleType vehicleType) {
        List<SpotType> compatibleSpots = getCompatibleSpots(vehicleType);

        for (SpotType spotType : compatibleSpots) {
            for (ParkingSpot spot : spots.get(spotType)) {
                if (!spot.isOccupied() && spot.canFitVehicle(vehicleType)) {
                    return spot;
                }
            }
        }
        return null;
    }

    private List<SpotType> getCompatibleSpots(VehicleType vehicleType) {
        switch (vehicleType) {
            case MOTORCYCLE:
                return Arrays.asList(SpotType.COMPACT, SpotType.LARGE, SpotType.HANDICAPPED);
            case CAR:
                return Arrays.asList(SpotType.COMPACT, SpotType.LARGE, SpotType.HANDICAPPED);
            case TRUCK:
                return Arrays.asList(SpotType.LARGE);
            default:
                return Collections.emptyList();
        }
    }

    public int getAvailableSpots(VehicleType vehicleType) {
        return getCompatibleSpots(vehicleType).stream()
            .mapToInt(type -> (int) spots.get(type).stream()
                .filter(spot -> !spot.isOccupied())
                .count())
            .sum();
    }

    public void displayAvailability() {
        System.out.printf("Floor %d: ", floorNumber);
        for (SpotType type : SpotType.values()) {
            long available = spots.get(type).stream().filter(s -> !s.isOccupied()).count();
            System.out.printf("%s: %d/%d | ", type, available, spots.get(type).size());
        }
        System.out.println();
    }

    public int getFloorNumber() {
        return floorNumber;
    }
}`},{name:"ParkingSpot (Abstract)",description:"Abstract base class for all parking spot types",code:`// Abstract base class for spots
public abstract class ParkingSpot {
    protected final String id;
    protected final SpotType type;
    protected Vehicle vehicle;
    protected boolean isOccupied;

    public ParkingSpot(String id, SpotType type) {
        this.id = id;
        this.type = type;
        this.isOccupied = false;
    }

    public synchronized void assignVehicle(Vehicle vehicle) {
        if (isOccupied) {
            throw new IllegalStateException("Spot already occupied");
        }
        if (!canFitVehicle(vehicle.getType())) {
            throw new IllegalArgumentException("Vehicle doesn't fit in this spot");
        }
        this.vehicle = vehicle;
        this.isOccupied = true;
    }

    public synchronized void removeVehicle() {
        this.vehicle = null;
        this.isOccupied = false;
    }

    public abstract boolean canFitVehicle(VehicleType vehicleType);

    public String getId() {
        return id;
    }

    public SpotType getType() {
        return type;
    }

    public boolean isOccupied() {
        return isOccupied;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }
}`},{name:"Concrete Spot Types",description:"Specific implementations of parking spots",code:`// Compact spot - for motorcycles and small cars
public class CompactSpot extends ParkingSpot {
    public CompactSpot(String id) {
        super(id, SpotType.COMPACT);
    }

    @Override
    public boolean canFitVehicle(VehicleType vehicleType) {
        return vehicleType == VehicleType.MOTORCYCLE ||
               vehicleType == VehicleType.CAR;
    }
}

// Large spot - for all vehicles
public class LargeSpot extends ParkingSpot {
    public LargeSpot(String id) {
        super(id, SpotType.LARGE);
    }

    @Override
    public boolean canFitVehicle(VehicleType vehicleType) {
        return true; // Can fit any vehicle
    }
}

// Handicapped spot - priority for handicapped vehicles
public class HandicappedSpot extends ParkingSpot {
    public HandicappedSpot(String id) {
        super(id, SpotType.HANDICAPPED);
    }

    @Override
    public boolean canFitVehicle(VehicleType vehicleType) {
        return vehicleType == VehicleType.MOTORCYCLE ||
               vehicleType == VehicleType.CAR;
    }
}`},{name:"SpotFactory",description:"Factory pattern to create appropriate spot types",code:`// Factory Pattern - Create spots based on type
public class SpotFactory {
    public static ParkingSpot createSpot(String id, SpotType type) {
        switch (type) {
            case COMPACT:
                return new CompactSpot(id);
            case LARGE:
                return new LargeSpot(id);
            case HANDICAPPED:
                return new HandicappedSpot(id);
            default:
                throw new IllegalArgumentException("Unknown spot type: " + type);
        }
    }
}`},{name:"Vehicle (Abstract)",description:"Base class for all vehicle types",code:`// Abstract vehicle class
public abstract class Vehicle {
    protected final String licensePlate;
    protected final VehicleType type;

    public Vehicle(String licensePlate, VehicleType type) {
        this.licensePlate = licensePlate;
        this.type = type;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public VehicleType getType() {
        return type;
    }
}

// Concrete vehicle types
public class Motorcycle extends Vehicle {
    public Motorcycle(String licensePlate) {
        super(licensePlate, VehicleType.MOTORCYCLE);
    }
}

public class Car extends Vehicle {
    public Car(String licensePlate) {
        super(licensePlate, VehicleType.CAR);
    }
}

public class Truck extends Vehicle {
    public Truck(String licensePlate) {
        super(licensePlate, VehicleType.TRUCK);
    }
}`},{name:"Ticket",description:"Parking ticket issued upon entry",code:`public class Ticket {
    private final String ticketId;
    private final Vehicle vehicle;
    private final ParkingSpot spot;
    private final long entryTime;
    private long exitTime;

    public Ticket(Vehicle vehicle, ParkingSpot spot) {
        this.ticketId = generateTicketId();
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = System.currentTimeMillis();
    }

    private String generateTicketId() {
        return "TKT-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }

    public long getDurationMinutes() {
        long endTime = exitTime > 0 ? exitTime : System.currentTimeMillis();
        return (endTime - entryTime) / (1000 * 60);
    }

    public long getDurationHours() {
        return (long) Math.ceil(getDurationMinutes() / 60.0);
    }

    // Getters
    public String getTicketId() { return ticketId; }
    public Vehicle getVehicle() { return vehicle; }
    public ParkingSpot getSpot() { return spot; }
    public long getEntryTime() { return entryTime; }
    public long getExitTime() { return exitTime; }

    public void setExitTime(long exitTime) {
        this.exitTime = exitTime;
    }
}`},{name:"PaymentProcessor",description:"Handles payment calculation using pricing strategy",code:`// Strategy Pattern for pricing
public class PaymentProcessor {
    private PricingStrategy pricingStrategy;

    public PaymentProcessor(PricingStrategy pricingStrategy) {
        this.pricingStrategy = pricingStrategy;
    }

    public double calculateFee(Ticket ticket) {
        return pricingStrategy.calculatePrice(ticket);
    }

    public void setPricingStrategy(PricingStrategy pricingStrategy) {
        this.pricingStrategy = pricingStrategy;
    }
}

// Pricing strategy interface
public interface PricingStrategy {
    double calculatePrice(Ticket ticket);
}

// Hourly pricing implementation
public class HourlyPricingStrategy implements PricingStrategy {
    private static final Map<SpotType, Double> HOURLY_RATES = Map.of(
        SpotType.COMPACT, 5.0,
        SpotType.LARGE, 8.0,
        SpotType.HANDICAPPED, 3.0
    );

    @Override
    public double calculatePrice(Ticket ticket) {
        long hours = ticket.getDurationHours();
        double hourlyRate = HOURLY_RATES.get(ticket.getSpot().getType());
        return hours * hourlyRate;
    }
}

// Flat rate pricing
public class FlatRatePricingStrategy implements PricingStrategy {
    private static final double FLAT_RATE = 20.0;

    @Override
    public double calculatePrice(Ticket ticket) {
        return FLAT_RATE;
    }
}`},{name:"Enums",description:"Enum definitions for spot and vehicle types",code:`public enum SpotType {
    COMPACT,
    LARGE,
    HANDICAPPED
}

public enum VehicleType {
    MOTORCYCLE,
    CAR,
    TRUCK
}`},{name:"ParkingStrategy",description:"Strategy for finding parking spots",code:`// Strategy for spot selection
public interface ParkingStrategy {
    ParkingSpot findSpot(List<ParkingFloor> floors, Vehicle vehicle);
}

// Nearest available spot
public class NearestSpotStrategy implements ParkingStrategy {
    @Override
    public ParkingSpot findSpot(List<ParkingFloor> floors, Vehicle vehicle) {
        for (ParkingFloor floor : floors) {
            ParkingSpot spot = floor.findAvailableSpot(vehicle.getType());
            if (spot != null) {
                return spot;
            }
        }
        return null;
    }
}

// Random spot selection for load balancing
public class RandomSpotStrategy implements ParkingStrategy {
    private final Random random = new Random();

    @Override
    public ParkingSpot findSpot(List<ParkingFloor> floors, Vehicle vehicle) {
        List<ParkingFloor> shuffled = new ArrayList<>(floors);
        Collections.shuffle(shuffled, random);

        for (ParkingFloor floor : shuffled) {
            ParkingSpot spot = floor.findAvailableSpot(vehicle.getType());
            if (spot != null) {
                return spot;
            }
        }
        return null;
    }
}`},{name:"Exceptions & Receipt",description:"Custom exceptions and receipt class",code:`// Custom exceptions
public class ParkingFullException extends Exception {
    public ParkingFullException(String message) {
        super(message);
    }
}

public class InvalidTicketException extends Exception {
    public InvalidTicketException(String message) {
        super(message);
    }
}

// Receipt class
public class Receipt {
    private final String receiptId;
    private final Ticket ticket;
    private final double amount;
    private final long timestamp;

    public Receipt(Ticket ticket, double amount) {
        this.receiptId = "RCP-" + UUID.randomUUID().toString().substring(0, 8);
        this.ticket = ticket;
        this.amount = amount;
        this.timestamp = System.currentTimeMillis();
    }

    public void print() {
        System.out.println("\\n========== RECEIPT ==========");
        System.out.println("Receipt ID: " + receiptId);
        System.out.println("Ticket ID: " + ticket.getTicketId());
        System.out.println("Vehicle: " + ticket.getVehicle().getLicensePlate());
        System.out.println("Spot: " + ticket.getSpot().getId());
        System.out.println("Duration: " + ticket.getDurationHours() + " hours");
        System.out.printf("Amount: $%.2f%n", amount);
        System.out.println("=============================\\n");
    }
}`}],interviewTips:["Clarify vehicle types and spot sizes - this drives the design","Discuss concurrency - multiple vehicles entering/exiting simultaneously","Consider scalability - what if 1000 floors or real-time analytics needed","Mention payment integration - how to handle credit cards, mobile payments","Discuss monitoring - how to detect faulty sensors or spot occupancy issues"]},{id:"chess",title:"Chess Game",difficulty:"Hard",description:"Design a complete two-player chess game with move validation and game rules.",requirements:["Standard 8x8 board with all chess pieces","Complete move validation for all piece types","Special moves: Castling, En Passant, Pawn Promotion","Check, Checkmate, and Stalemate detection","Move history with undo/redo functionality","Timer support (Blitz, Rapid, Classical)","Save and load game state","Support for PGN (Portable Game Notation) format"],designPatterns:[{name:"Singleton",usage:"Game instance manages single game session"},{name:"Factory",usage:"PieceFactory creates appropriate piece instances"},{name:"Command",usage:"Move objects for undo/redo functionality"},{name:"Template Method",usage:"Abstract Piece class with common move validation"},{name:"Observer",usage:"Notify UI when board state changes"},{name:"Memento",usage:"Save and restore game state"}],classRelationships:["Game HAS-ONE Board (1 to 1)","Game HAS-TWO Player (1 to 2)","Board HAS-MANY Piece (1 to 32 max)","Piece IS-A (King, Queen, Rook, Bishop, Knight, Pawn)","Move REFERENCES Piece and Position","Game HAS-MANY Move (move history)","Player HAS-ONE Timer (optional)"],tradeoffs:[{aspect:"Move Validation",options:"Piece-based vs Board-based validation",tradeoff:"Piece-based is OOP-friendly but complex. Board-based is simpler but less extensible."},{aspect:"Board Representation",options:"2D Array vs 1D Array vs Bitboards",tradeoff:"2D array is intuitive. 1D array saves space. Bitboards are fastest for engines but complex."},{aspect:"Move History",options:"Full board snapshots vs Incremental moves",tradeoff:"Snapshots enable fast undo but use more memory. Incremental is efficient but requires replay."},{aspect:"State Management",options:"Mutable vs Immutable board state",tradeoff:"Mutable is efficient. Immutable is thread-safe and enables easy undo but requires copying."}],classDiagram:`
┌─────────────────────────┐
│        Game             │
├─────────────────────────┤
│ - board: Board          │
│ - players: Player[2]    │
│ - currentPlayer: Player │
│ - moveHistory: Stack    │
│ - gameState: GameState  │
├─────────────────────────┤
│ + makeMove()            │
│ + isCheck()             │
│ + isCheckmate()         │
│ + undoMove()            │
└───────┬─────────────────┘
        │ 1
        │ has
        │ 1
┌───────▼─────────────────┐
│       Board             │
├─────────────────────────┤
│ - cells: Cell[8][8]     │
│ - capturedPieces: List  │
├─────────────────────────┤
│ + getPiece()            │
│ + movePiece()           │
│ + isValidPosition()     │
└───────┬─────────────────┘
        │ 1
        │ contains
        │ *
┌───────▼─────────────────┐
│      Piece              │
│    (Abstract)           │
├─────────────────────────┤
│ - color: Color          │
│ - position: Position    │
│ - hasMoved: boolean     │
├─────────────────────────┤
│ + canMove()             │
│ + getPossibleMoves()    │
└─────────────────────────┘
        △
        │
   ┌────┴────┬────┬────┬────┬────┐
   │         │    │    │    │    │
 King    Queen Rook Bishop Knight Pawn
`,classes:[{name:"Game",description:"Main game controller managing the chess game",code:`public class Game {
    private final Board board;
    private final Player whitePlayer;
    private final Player blackPlayer;
    private Player currentPlayer;
    private GameState gameState;
    private final Stack<Move> moveHistory;
    private final Stack<Move> redoStack;
    private GameTimer timer;

    public Game(Player whitePlayer, Player blackPlayer) {
        this.board = new Board();
        this.whitePlayer = whitePlayer;
        this.blackPlayer = blackPlayer;
        this.currentPlayer = whitePlayer; // White starts
        this.gameState = GameState.ACTIVE;
        this.moveHistory = new Stack<>();
        this.redoStack = new Stack<>();
        initializeBoard();
    }

    private void initializeBoard() {
        // Initialize pieces for both players
        board.setupInitialPosition();
    }

    public boolean makeMove(Position from, Position to) {
        // Validate turn
        Piece piece = board.getPiece(from);
        if (piece == null || piece.getColor() != currentPlayer.getColor()) {
            return false;
        }

        // Create and validate move
        Move move = new Move(piece, from, to, board);
        if (!isValidMove(move)) {
            return false;
        }

        // Check if move puts own king in check
        Board tempBoard = board.clone();
        tempBoard.movePiece(from, to);
        if (tempBoard.isKingInCheck(currentPlayer.getColor())) {
            return false;
        }

        // Execute move
        executeMove(move);
        moveHistory.push(move);
        redoStack.clear();

        // Check for special moves
        handleSpecialMoves(move);

        // Switch turn
        switchPlayer();

        // Update game state
        updateGameState();

        return true;
    }

    private boolean isValidMove(Move move) {
        Piece piece = move.getPiece();

        // Check if piece can move to destination
        if (!piece.canMove(board, move.getTo())) {
            return false;
        }

        // Check if destination has friendly piece
        Piece destPiece = board.getPiece(move.getTo());
        if (destPiece != null && destPiece.getColor() == piece.getColor()) {
            return false;
        }

        return true;
    }

    private void executeMove(Move move) {
        Piece capturedPiece = board.getPiece(move.getTo());
        move.setCapturedPiece(capturedPiece);

        board.movePiece(move.getFrom(), move.getTo());
        move.getPiece().setHasMoved(true);
    }

    private void handleSpecialMoves(Move move) {
        Piece piece = move.getPiece();

        // Castling
        if (piece instanceof King && Math.abs(move.getFrom().getCol() - move.getTo().getCol()) == 2) {
            executeCastling(move);
        }

        // Pawn promotion
        if (piece instanceof Pawn && (move.getTo().getRow() == 0 || move.getTo().getRow() == 7)) {
            promotePawn(move);
        }

        // En passant
        if (piece instanceof Pawn && move.isEnPassant()) {
            executeEnPassant(move);
        }
    }

    private void executeCastling(Move move) {
        int row = move.getFrom().getRow();
        boolean kingSide = move.getTo().getCol() > move.getFrom().getCol();

        if (kingSide) {
            // Move rook from h-file to f-file
            Position rookFrom = new Position(row, 7);
            Position rookTo = new Position(row, 5);
            board.movePiece(rookFrom, rookTo);
        } else {
            // Move rook from a-file to d-file
            Position rookFrom = new Position(row, 0);
            Position rookTo = new Position(row, 3);
            board.movePiece(rookFrom, rookTo);
        }
    }

    private void promotePawn(Move move) {
        // Default promotion to Queen (can be extended for player choice)
        Position pos = move.getTo();
        Color color = move.getPiece().getColor();
        board.removePiece(pos);
        board.placePiece(new Queen(color, pos), pos);
        move.setPromotedTo(PieceType.QUEEN);
    }

    private void executeEnPassant(Move move) {
        // Remove the captured pawn
        int capturedRow = move.getFrom().getRow();
        int capturedCol = move.getTo().getCol();
        Position capturedPos = new Position(capturedRow, capturedCol);
        board.removePiece(capturedPos);
    }

    public boolean undoMove() {
        if (moveHistory.isEmpty()) {
            return false;
        }

        Move move = moveHistory.pop();
        redoStack.push(move);

        // Reverse the move
        board.movePiece(move.getTo(), move.getFrom());

        // Restore captured piece
        if (move.getCapturedPiece() != null) {
            board.placePiece(move.getCapturedPiece(), move.getTo());
        }

        // Handle special move reversals
        reverseSpecialMoves(move);

        // Switch player back
        switchPlayer();
        updateGameState();

        return true;
    }

    private void reverseSpecialMoves(Move move) {
        // Reverse castling, promotion, en passant
        // Implementation details...
    }

    public boolean redoMove() {
        if (redoStack.isEmpty()) {
            return false;
        }

        Move move = redoStack.pop();
        board.movePiece(move.getFrom(), move.getTo());
        moveHistory.push(move);

        switchPlayer();
        updateGameState();

        return true;
    }

    private void switchPlayer() {
        currentPlayer = (currentPlayer == whitePlayer) ? blackPlayer : whitePlayer;
    }

    private void updateGameState() {
        Color currentColor = currentPlayer.getColor();

        if (board.isKingInCheck(currentColor)) {
            if (board.isCheckmate(currentColor)) {
                gameState = (currentColor == Color.WHITE) ?
                    GameState.BLACK_WINS : GameState.WHITE_WINS;
            } else {
                gameState = GameState.CHECK;
            }
        } else if (board.isStalemate(currentColor)) {
            gameState = GameState.STALEMATE;
        } else {
            gameState = GameState.ACTIVE;
        }
    }

    public boolean isCheck() {
        return board.isKingInCheck(currentPlayer.getColor());
    }

    public boolean isCheckmate() {
        return board.isCheckmate(currentPlayer.getColor());
    }

    public boolean isStalemate() {
        return board.isStalemate(currentPlayer.getColor());
    }

    public GameState getGameState() {
        return gameState;
    }

    public Board getBoard() {
        return board;
    }

    public Player getCurrentPlayer() {
        return currentPlayer;
    }

    public List<Move> getMoveHistory() {
        return new ArrayList<>(moveHistory);
    }
}`},{name:"Board",description:"Represents the chess board and manages pieces",code:`public class Board implements Cloneable {
    private final Cell[][] cells;
    private final Map<Color, List<Piece>> pieces;
    private final List<Piece> capturedPieces;

    public Board() {
        this.cells = new Cell[8][8];
        this.pieces = new EnumMap<>(Color.class);
        this.capturedPieces = new ArrayList<>();

        pieces.put(Color.WHITE, new ArrayList<>());
        pieces.put(Color.BLACK, new ArrayList<>());

        initializeCells();
    }

    private void initializeCells() {
        for (int row = 0; row < 8; row++) {
            for (int col = 0; col < 8; col++) {
                cells[row][col] = new Cell(new Position(row, col));
            }
        }
    }

    public void setupInitialPosition() {
        // Setup pawns
        for (int col = 0; col < 8; col++) {
            placePiece(new Pawn(Color.WHITE, new Position(6, col)), new Position(6, col));
            placePiece(new Pawn(Color.BLACK, new Position(1, col)), new Position(1, col));
        }

        // Setup rooks
        placePiece(new Rook(Color.WHITE, new Position(7, 0)), new Position(7, 0));
        placePiece(new Rook(Color.WHITE, new Position(7, 7)), new Position(7, 7));
        placePiece(new Rook(Color.BLACK, new Position(0, 0)), new Position(0, 0));
        placePiece(new Rook(Color.BLACK, new Position(0, 7)), new Position(0, 7));

        // Setup knights
        placePiece(new Knight(Color.WHITE, new Position(7, 1)), new Position(7, 1));
        placePiece(new Knight(Color.WHITE, new Position(7, 6)), new Position(7, 6));
        placePiece(new Knight(Color.BLACK, new Position(0, 1)), new Position(0, 1));
        placePiece(new Knight(Color.BLACK, new Position(0, 6)), new Position(0, 6));

        // Setup bishops
        placePiece(new Bishop(Color.WHITE, new Position(7, 2)), new Position(7, 2));
        placePiece(new Bishop(Color.WHITE, new Position(7, 5)), new Position(7, 5));
        placePiece(new Bishop(Color.BLACK, new Position(0, 2)), new Position(0, 2));
        placePiece(new Bishop(Color.BLACK, new Position(0, 5)), new Position(0, 5));

        // Setup queens
        placePiece(new Queen(Color.WHITE, new Position(7, 3)), new Position(7, 3));
        placePiece(new Queen(Color.BLACK, new Position(0, 3)), new Position(0, 3));

        // Setup kings
        placePiece(new King(Color.WHITE, new Position(7, 4)), new Position(7, 4));
        placePiece(new King(Color.BLACK, new Position(0, 4)), new Position(0, 4));
    }

    public void placePiece(Piece piece, Position position) {
        if (!isValidPosition(position)) {
            throw new IllegalArgumentException("Invalid position: " + position);
        }

        cells[position.getRow()][position.getCol()].setPiece(piece);
        pieces.get(piece.getColor()).add(piece);
        piece.setPosition(position);
    }

    public void removePiece(Position position) {
        Piece piece = getPiece(position);
        if (piece != null) {
            cells[position.getRow()][position.getCol()].setPiece(null);
            pieces.get(piece.getColor()).remove(piece);
            capturedPieces.add(piece);
        }
    }

    public void movePiece(Position from, Position to) {
        Piece piece = getPiece(from);
        if (piece == null) {
            throw new IllegalArgumentException("No piece at position: " + from);
        }

        // Capture piece at destination if exists
        Piece captured = getPiece(to);
        if (captured != null) {
            removePiece(to);
        }

        // Move piece
        cells[from.getRow()][from.getCol()].setPiece(null);
        cells[to.getRow()][to.getCol()].setPiece(piece);
        piece.setPosition(to);
    }

    public Piece getPiece(Position position) {
        if (!isValidPosition(position)) {
            return null;
        }
        return cells[position.getRow()][position.getCol()].getPiece();
    }

    public boolean isValidPosition(Position position) {
        int row = position.getRow();
        int col = position.getCol();
        return row >= 0 && row < 8 && col >= 0 && col < 8;
    }

    public boolean isPathClear(Position from, Position to) {
        int rowDir = Integer.compare(to.getRow() - from.getRow(), 0);
        int colDir = Integer.compare(to.getCol() - from.getCol(), 0);

        int currentRow = from.getRow() + rowDir;
        int currentCol = from.getCol() + colDir;

        while (currentRow != to.getRow() || currentCol != to.getCol()) {
            if (getPiece(new Position(currentRow, currentCol)) != null) {
                return false;
            }
            currentRow += rowDir;
            currentCol += colDir;
        }

        return true;
    }

    public boolean isKingInCheck(Color color) {
        King king = findKing(color);
        if (king == null) {
            return false;
        }

        Color opponentColor = (color == Color.WHITE) ? Color.BLACK : Color.WHITE;
        List<Piece> opponentPieces = pieces.get(opponentColor);

        for (Piece piece : opponentPieces) {
            if (piece.canMove(this, king.getPosition())) {
                return true;
            }
        }

        return false;
    }

    public boolean isCheckmate(Color color) {
        if (!isKingInCheck(color)) {
            return false;
        }

        // Check if any legal move can get out of check
        return !hasLegalMoves(color);
    }

    public boolean isStalemate(Color color) {
        if (isKingInCheck(color)) {
            return false;
        }

        return !hasLegalMoves(color);
    }

    private boolean hasLegalMoves(Color color) {
        List<Piece> playerPieces = pieces.get(color);

        for (Piece piece : playerPieces) {
            List<Position> possibleMoves = piece.getPossibleMoves(this);
            for (Position to : possibleMoves) {
                // Try the move
                Board tempBoard = this.clone();
                tempBoard.movePiece(piece.getPosition(), to);

                // Check if king is still in check
                if (!tempBoard.isKingInCheck(color)) {
                    return true; // Found a legal move
                }
            }
        }

        return false;
    }

    private King findKing(Color color) {
        for (Piece piece : pieces.get(color)) {
            if (piece instanceof King) {
                return (King) piece;
            }
        }
        return null;
    }

    @Override
    public Board clone() {
        // Deep copy implementation
        try {
            Board cloned = (Board) super.clone();
            // Clone cells and pieces
            // ... implementation details
            return cloned;
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
    }

    public void display() {
        System.out.println("  a b c d e f g h");
        for (int row = 0; row < 8; row++) {
            System.out.print((8 - row) + " ");
            for (int col = 0; col < 8; col++) {
                Piece piece = cells[row][col].getPiece();
                System.out.print(piece == null ? ". " : piece.getSymbol() + " ");
            }
            System.out.println((8 - row));
        }
        System.out.println("  a b c d e f g h");
    }
}`},{name:"Piece (Abstract)",description:"Abstract base class for all chess pieces",code:`// Template Method Pattern - Common piece behavior
public abstract class Piece implements Cloneable {
    protected Color color;
    protected Position position;
    protected boolean hasMoved;
    protected PieceType type;

    public Piece(Color color, Position position, PieceType type) {
        this.color = color;
        this.position = position;
        this.type = type;
        this.hasMoved = false;
    }

    // Template method - defines the algorithm skeleton
    public abstract boolean canMove(Board board, Position to);

    public abstract List<Position> getPossibleMoves(Board board);

    public abstract String getSymbol();

    // Common validation logic
    protected boolean isValidDestination(Board board, Position to) {
        if (!board.isValidPosition(to)) {
            return false;
        }

        Piece destPiece = board.getPiece(to);
        return destPiece == null || destPiece.getColor() != this.color;
    }

    public Color getColor() {
        return color;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public boolean hasMoved() {
        return hasMoved;
    }

    public void setHasMoved(boolean hasMoved) {
        this.hasMoved = hasMoved;
    }

    public PieceType getType() {
        return type;
    }

    @Override
    public Piece clone() {
        try {
            return (Piece) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
    }
}`},{name:"King",description:"King piece with movement and castling logic",code:`public class King extends Piece {
    public King(Color color, Position position) {
        super(color, position, PieceType.KING);
    }

    @Override
    public boolean canMove(Board board, Position to) {
        if (!isValidDestination(board, to)) {
            return false;
        }

        int rowDiff = Math.abs(to.getRow() - position.getRow());
        int colDiff = Math.abs(to.getCol() - position.getCol());

        // Normal king move (one square in any direction)
        if (rowDiff <= 1 && colDiff <= 1) {
            return true;
        }

        // Castling (two squares horizontally)
        if (rowDiff == 0 && colDiff == 2 && !hasMoved) {
            return canCastle(board, to);
        }

        return false;
    }

    private boolean canCastle(Board board, Position to) {
        int row = position.getRow();
        boolean kingSide = to.getCol() > position.getCol();

        // Check if king is in check
        if (board.isKingInCheck(color)) {
            return false;
        }

        if (kingSide) {
            // King-side castling
            Position rookPos = new Position(row, 7);
            Piece rook = board.getPiece(rookPos);

            if (rook == null || rook.hasMoved() || !(rook instanceof Rook)) {
                return false;
            }

            // Check if path is clear
            for (int col = position.getCol() + 1; col < 7; col++) {
                if (board.getPiece(new Position(row, col)) != null) {
                    return false;
                }
            }

            // Check if king passes through or ends in check
            for (int col = position.getCol(); col <= to.getCol(); col++) {
                Board tempBoard = board.clone();
                tempBoard.movePiece(position, new Position(row, col));
                if (tempBoard.isKingInCheck(color)) {
                    return false;
                }
            }
        } else {
            // Queen-side castling
            Position rookPos = new Position(row, 0);
            Piece rook = board.getPiece(rookPos);

            if (rook == null || rook.hasMoved() || !(rook instanceof Rook)) {
                return false;
            }

            // Check if path is clear
            for (int col = 1; col < position.getCol(); col++) {
                if (board.getPiece(new Position(row, col)) != null) {
                    return false;
                }
            }

            // Check if king passes through or ends in check
            for (int col = position.getCol(); col >= to.getCol(); col--) {
                Board tempBoard = board.clone();
                tempBoard.movePiece(position, new Position(row, col));
                if (tempBoard.isKingInCheck(color)) {
                    return false;
                }
            }
        }

        return true;
    }

    @Override
    public List<Position> getPossibleMoves(Board board) {
        List<Position> moves = new ArrayList<>();
        int[] rowOffsets = {-1, -1, -1, 0, 0, 1, 1, 1};
        int[] colOffsets = {-1, 0, 1, -1, 1, -1, 0, 1};

        for (int i = 0; i < 8; i++) {
            Position newPos = new Position(
                position.getRow() + rowOffsets[i],
                position.getCol() + colOffsets[i]
            );
            if (canMove(board, newPos)) {
                moves.add(newPos);
            }
        }

        return moves;
    }

    @Override
    public String getSymbol() {
        return color == Color.WHITE ? "♔" : "♚";
    }
}`},{name:"Queen",description:"Queen piece combining rook and bishop movement",code:`public class Queen extends Piece {
    public Queen(Color color, Position position) {
        super(color, position, PieceType.QUEEN);
    }

    @Override
    public boolean canMove(Board board, Position to) {
        if (!isValidDestination(board, to)) {
            return false;
        }

        int rowDiff = Math.abs(to.getRow() - position.getRow());
        int colDiff = Math.abs(to.getCol() - position.getCol());

        // Moves like rook (horizontal or vertical) or bishop (diagonal)
        boolean isRookMove = (rowDiff == 0 || colDiff == 0);
        boolean isBishopMove = (rowDiff == colDiff);

        if (!isRookMove && !isBishopMove) {
            return false;
        }

        return board.isPathClear(position, to);
    }

    @Override
    public List<Position> getPossibleMoves(Board board) {
        List<Position> moves = new ArrayList<>();

        // All 8 directions
        int[][] directions = {
            {-1, 0}, {1, 0}, {0, -1}, {0, 1},  // Rook moves
            {-1, -1}, {-1, 1}, {1, -1}, {1, 1}  // Bishop moves
        };

        for (int[] dir : directions) {
            for (int i = 1; i < 8; i++) {
                Position newPos = new Position(
                    position.getRow() + dir[0] * i,
                    position.getCol() + dir[1] * i
                );
                if (!board.isValidPosition(newPos)) {
                    break;
                }
                if (canMove(board, newPos)) {
                    moves.add(newPos);
                    if (board.getPiece(newPos) != null) {
                        break; // Can't move past a piece
                    }
                } else {
                    break;
                }
            }
        }

        return moves;
    }

    @Override
    public String getSymbol() {
        return color == Color.WHITE ? "♕" : "♛";
    }
}`},{name:"Rook",description:"Rook piece with horizontal and vertical movement",code:`public class Rook extends Piece {
    public Rook(Color color, Position position) {
        super(color, position, PieceType.ROOK);
    }

    @Override
    public boolean canMove(Board board, Position to) {
        if (!isValidDestination(board, to)) {
            return false;
        }

        // Must move in straight line (horizontal or vertical)
        if (position.getRow() != to.getRow() && position.getCol() != to.getCol()) {
            return false;
        }

        return board.isPathClear(position, to);
    }

    @Override
    public List<Position> getPossibleMoves(Board board) {
        List<Position> moves = new ArrayList<>();
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        for (int[] dir : directions) {
            for (int i = 1; i < 8; i++) {
                Position newPos = new Position(
                    position.getRow() + dir[0] * i,
                    position.getCol() + dir[1] * i
                );
                if (!board.isValidPosition(newPos)) {
                    break;
                }
                if (canMove(board, newPos)) {
                    moves.add(newPos);
                    if (board.getPiece(newPos) != null) {
                        break;
                    }
                } else {
                    break;
                }
            }
        }

        return moves;
    }

    @Override
    public String getSymbol() {
        return color == Color.WHITE ? "♖" : "♜";
    }
}`},{name:"Bishop",description:"Bishop piece with diagonal movement",code:`public class Bishop extends Piece {
    public Bishop(Color color, Position position) {
        super(color, position, PieceType.BISHOP);
    }

    @Override
    public boolean canMove(Board board, Position to) {
        if (!isValidDestination(board, to)) {
            return false;
        }

        // Must move diagonally
        int rowDiff = Math.abs(to.getRow() - position.getRow());
        int colDiff = Math.abs(to.getCol() - position.getCol());

        if (rowDiff != colDiff) {
            return false;
        }

        return board.isPathClear(position, to);
    }

    @Override
    public List<Position> getPossibleMoves(Board board) {
        List<Position> moves = new ArrayList<>();
        int[][] directions = {{-1, -1}, {-1, 1}, {1, -1}, {1, 1}};

        for (int[] dir : directions) {
            for (int i = 1; i < 8; i++) {
                Position newPos = new Position(
                    position.getRow() + dir[0] * i,
                    position.getCol() + dir[1] * i
                );
                if (!board.isValidPosition(newPos)) {
                    break;
                }
                if (canMove(board, newPos)) {
                    moves.add(newPos);
                    if (board.getPiece(newPos) != null) {
                        break;
                    }
                } else {
                    break;
                }
            }
        }

        return moves;
    }

    @Override
    public String getSymbol() {
        return color == Color.WHITE ? "♗" : "♝";
    }
}`},{name:"Knight",description:"Knight piece with L-shaped movement",code:`public class Knight extends Piece {
    public Knight(Color color, Position position) {
        super(color, position, PieceType.KNIGHT);
    }

    @Override
    public boolean canMove(Board board, Position to) {
        if (!isValidDestination(board, to)) {
            return false;
        }

        int rowDiff = Math.abs(to.getRow() - position.getRow());
        int colDiff = Math.abs(to.getCol() - position.getCol());

        // L-shaped move: 2 in one direction, 1 in the other
        return (rowDiff == 2 && colDiff == 1) || (rowDiff == 1 && colDiff == 2);
    }

    @Override
    public List<Position> getPossibleMoves(Board board) {
        List<Position> moves = new ArrayList<>();
        int[][] knightMoves = {
            {-2, -1}, {-2, 1}, {-1, -2}, {-1, 2},
            {1, -2}, {1, 2}, {2, -1}, {2, 1}
        };

        for (int[] move : knightMoves) {
            Position newPos = new Position(
                position.getRow() + move[0],
                position.getCol() + move[1]
            );
            if (canMove(board, newPos)) {
                moves.add(newPos);
            }
        }

        return moves;
    }

    @Override
    public String getSymbol() {
        return color == Color.WHITE ? "♘" : "♞";
    }
}`},{name:"Pawn",description:"Pawn piece with special movement rules including en passant",code:`public class Pawn extends Piece {
    public Pawn(Color color, Position position) {
        super(color, position, PieceType.PAWN);
    }

    @Override
    public boolean canMove(Board board, Position to) {
        if (!board.isValidPosition(to)) {
            return false;
        }

        int direction = (color == Color.WHITE) ? -1 : 1;
        int rowDiff = to.getRow() - position.getRow();
        int colDiff = Math.abs(to.getCol() - position.getCol());

        // Forward one square
        if (colDiff == 0 && rowDiff == direction) {
            return board.getPiece(to) == null;
        }

        // Forward two squares from starting position
        if (colDiff == 0 && rowDiff == 2 * direction && !hasMoved) {
            int startRow = (color == Color.WHITE) ? 6 : 1;
            if (position.getRow() == startRow) {
                Position intermediate = new Position(
                    position.getRow() + direction,
                    position.getCol()
                );
                return board.getPiece(to) == null && board.getPiece(intermediate) == null;
            }
        }

        // Diagonal capture
        if (colDiff == 1 && rowDiff == direction) {
            Piece targetPiece = board.getPiece(to);
            if (targetPiece != null && targetPiece.getColor() != color) {
                return true;
            }

            // En passant
            if (canEnPassant(board, to)) {
                return true;
            }
        }

        return false;
    }

    private boolean canEnPassant(Board board, Position to) {
        // Check if there's an opponent pawn that just moved two squares
        int direction = (color == Color.WHITE) ? -1 : 1;
        Position adjacentPos = new Position(position.getRow(), to.getCol());
        Piece adjacentPiece = board.getPiece(adjacentPos);

        if (adjacentPiece instanceof Pawn && adjacentPiece.getColor() != color) {
            // Need to check if this pawn just moved two squares
            // This requires move history - simplified here
            return true;
        }

        return false;
    }

    @Override
    public List<Position> getPossibleMoves(Board board) {
        List<Position> moves = new ArrayList<>();
        int direction = (color == Color.WHITE) ? -1 : 1;

        // Forward one square
        Position forward = new Position(position.getRow() + direction, position.getCol());
        if (canMove(board, forward)) {
            moves.add(forward);
        }

        // Forward two squares
        Position forwardTwo = new Position(position.getRow() + 2 * direction, position.getCol());
        if (canMove(board, forwardTwo)) {
            moves.add(forwardTwo);
        }

        // Diagonal captures
        for (int colOffset : new int[]{-1, 1}) {
            Position diagonal = new Position(
                position.getRow() + direction,
                position.getCol() + colOffset
            );
            if (canMove(board, diagonal)) {
                moves.add(diagonal);
            }
        }

        return moves;
    }

    @Override
    public String getSymbol() {
        return color == Color.WHITE ? "♙" : "♟";
    }
}`},{name:"Supporting Classes",description:"Position, Cell, Player, Move, and enum classes",code:`// Position class
public class Position {
    private final int row;
    private final int col;

    public Position(int row, int col) {
        this.row = row;
        this.col = col;
    }

    public int getRow() {
        return row;
    }

    public int getCol() {
        return col;
    }

    public String toChessNotation() {
        char file = (char) ('a' + col);
        int rank = 8 - row;
        return "" + file + rank;
    }

    public static Position fromChessNotation(String notation) {
        char file = notation.charAt(0);
        int rank = Character.getNumericValue(notation.charAt(1));
        return new Position(8 - rank, file - 'a');
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Position)) return false;
        Position position = (Position) o;
        return row == position.row && col == position.col;
    }

    @Override
    public int hashCode() {
        return Objects.hash(row, col);
    }

    @Override
    public String toString() {
        return toChessNotation();
    }
}

// Cell class
public class Cell {
    private final Position position;
    private Piece piece;

    public Cell(Position position) {
        this.position = position;
        this.piece = null;
    }

    public Position getPosition() {
        return position;
    }

    public Piece getPiece() {
        return piece;
    }

    public void setPiece(Piece piece) {
        this.piece = piece;
    }

    public boolean isEmpty() {
        return piece == null;
    }
}

// Player class
public class Player {
    private final String name;
    private final Color color;
    private int capturedPieceValue;

    public Player(String name, Color color) {
        this.name = name;
        this.color = color;
        this.capturedPieceValue = 0;
    }

    public String getName() {
        return name;
    }

    public Color getColor() {
        return color;
    }

    public void addCapturedValue(int value) {
        this.capturedPieceValue += value;
    }

    public int getCapturedPieceValue() {
        return capturedPieceValue;
    }
}

// Move class - Command Pattern
public class Move {
    private final Piece piece;
    private final Position from;
    private final Position to;
    private Piece capturedPiece;
    private PieceType promotedTo;
    private boolean isEnPassant;
    private boolean isCastling;
    private final long timestamp;

    public Move(Piece piece, Position from, Position to, Board board) {
        this.piece = piece;
        this.from = from;
        this.to = to;
        this.timestamp = System.currentTimeMillis();
        this.capturedPiece = board.getPiece(to);
    }

    public Piece getPiece() {
        return piece;
    }

    public Position getFrom() {
        return from;
    }

    public Position getTo() {
        return to;
    }

    public Piece getCapturedPiece() {
        return capturedPiece;
    }

    public void setCapturedPiece(Piece capturedPiece) {
        this.capturedPiece = capturedPiece;
    }

    public PieceType getPromotedTo() {
        return promotedTo;
    }

    public void setPromotedTo(PieceType promotedTo) {
        this.promotedTo = promotedTo;
    }

    public boolean isEnPassant() {
        return isEnPassant;
    }

    public void setEnPassant(boolean enPassant) {
        isEnPassant = enPassant;
    }

    public boolean isCastling() {
        return isCastling;
    }

    public void setCastling(boolean castling) {
        isCastling = castling;
    }

    public String toAlgebraicNotation() {
        StringBuilder notation = new StringBuilder();

        // Piece symbol (except for pawns)
        if (!(piece instanceof Pawn)) {
            notation.append(piece.getType().getSymbol());
        }

        // Capture indicator
        if (capturedPiece != null) {
            if (piece instanceof Pawn) {
                notation.append(from.toChessNotation().charAt(0));
            }
            notation.append("x");
        }

        // Destination
        notation.append(to.toChessNotation());

        // Promotion
        if (promotedTo != null) {
            notation.append("=").append(promotedTo.getSymbol());
        }

        return notation.toString();
    }

    @Override
    public String toString() {
        return from.toChessNotation() + " -> " + to.toChessNotation();
    }
}

// Enums
public enum Color {
    WHITE, BLACK
}

public enum PieceType {
    KING("K", 0),
    QUEEN("Q", 9),
    ROOK("R", 5),
    BISHOP("B", 3),
    KNIGHT("N", 3),
    PAWN("", 1);

    private final String symbol;
    private final int value;

    PieceType(String symbol, int value) {
        this.symbol = symbol;
        this.value = value;
    }

    public String getSymbol() {
        return symbol;
    }

    public int getValue() {
        return value;
    }
}

public enum GameState {
    ACTIVE,
    CHECK,
    CHECKMATE,
    STALEMATE,
    WHITE_WINS,
    BLACK_WINS,
    DRAW
}`}],interviewTips:["Start with core pieces and basic movement, then add special moves","Discuss board representation tradeoffs (2D array vs bitboards)","Mention how to detect check/checkmate efficiently","Consider extensibility: AI players, network play, time controls","Discuss move validation performance - caching valid moves vs computing on-demand","Talk about thread safety if implementing networked multiplayer","Consider persistent storage for game history and replays"]}],j={nodes:[{id:"controller",type:"classNode",position:{x:400,y:50},data:{label:"ElevatorController",stereotype:"Singleton",color:"bg-purple-600",attributes:["- instance: ElevatorController","- elevators: List<Elevator>","- strategy: SchedulingStrategy"],methods:["+ getInstance(): ElevatorController","+ handleExternalRequest(floor, dir)","+ handleInternalRequest(id, floor)","+ setStrategy(strategy)"]}},{id:"elevator",type:"classNode",position:{x:100,y:300},data:{label:"Elevator",color:"bg-blue-600",attributes:["- id: int","- currentFloor: int","- state: ElevatorState","- direction: Direction","- upRequests: PriorityQueue","- downRequests: PriorityQueue","- door: Door"],methods:["+ run()","+ addRequest(request)","+ processRequests()","+ moveToFloor(floor)"]}},{id:"request",type:"classNode",position:{x:500,y:300},data:{label:"Request",stereotype:"Abstract",color:"bg-green-600",attributes:["# floor: int","# timestamp: long"],methods:["+ getFloor(): int","+ getDirection(): Direction"]}},{id:"internal-request",type:"classNode",position:{x:400,y:500},data:{label:"InternalRequest",color:"bg-green-500",attributes:[],methods:["+ getDirection(): Direction"]}},{id:"external-request",type:"classNode",position:{x:600,y:500},data:{label:"ExternalRequest",color:"bg-green-500",attributes:["- direction: Direction"],methods:["+ getDirection(): Direction"]}},{id:"strategy",type:"classNode",position:{x:700,y:50},data:{label:"SchedulingStrategy",stereotype:"Interface",color:"bg-orange-600",attributes:[],methods:["+ selectElevator(elevators, floor, dir)"]}},{id:"fcfs",type:"classNode",position:{x:600,y:200},data:{label:"FCFSStrategy",color:"bg-orange-500",attributes:[],methods:["+ selectElevator(elevators, floor, dir)"]}},{id:"scan",type:"classNode",position:{x:800,y:200},data:{label:"SCANStrategy",color:"bg-orange-500",attributes:[],methods:["+ selectElevator(elevators, floor, dir)"]}},{id:"door",type:"classNode",position:{x:100,y:550},data:{label:"Door",color:"bg-indigo-600",attributes:["- state: DoorState"],methods:["+ open()","+ close()"]}}],edges:[{id:"e1",source:"controller",target:"elevator",label:"1 → N",type:"smoothstep",animated:!0,style:{stroke:"#3b82f6",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#3b82f6"}},{id:"e2",source:"controller",target:"strategy",label:"uses",type:"smoothstep",style:{stroke:"#f97316",strokeWidth:2,strokeDasharray:"5,5"},markerEnd:{type:"arrow",color:"#f97316"}},{id:"e3",source:"elevator",target:"request",label:"has many",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e4",source:"internal-request",target:"request",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e5",source:"external-request",target:"request",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e6",source:"fcfs",target:"strategy",label:"implements",type:"smoothstep",style:{stroke:"#f97316",strokeWidth:2,strokeDasharray:"5,5"},markerEnd:{type:"arrow",color:"#f97316"}},{id:"e7",source:"scan",target:"strategy",label:"implements",type:"smoothstep",style:{stroke:"#f97316",strokeWidth:2,strokeDasharray:"5,5"},markerEnd:{type:"arrow",color:"#f97316"}},{id:"e8",source:"elevator",target:"door",label:"has 1",type:"smoothstep",style:{stroke:"#6366f1",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#6366f1"}}]},A={nodes:[{id:"parking-lot",type:"classNode",position:{x:400,y:50},data:{label:"ParkingLot",stereotype:"Singleton",color:"bg-purple-600",attributes:["- instance: ParkingLot","- floors: List<ParkingFloor>","- activeTickets: Map","- strategy: ParkingStrategy"],methods:["+ getInstance(): ParkingLot","+ parkVehicle(vehicle): Ticket","+ removeVehicle(ticketId): Receipt","+ isFull(): boolean"]}},{id:"parking-floor",type:"classNode",position:{x:100,y:300},data:{label:"ParkingFloor",color:"bg-blue-600",attributes:["- floorNumber: int","- spots: Map<SpotType, List>"],methods:["+ findAvailableSpot(type)","+ getAvailableSpots(type): int"]}},{id:"parking-spot",type:"classNode",position:{x:100,y:500},data:{label:"ParkingSpot",stereotype:"Abstract",color:"bg-green-600",attributes:["# id: String","# type: SpotType","# vehicle: Vehicle","# isOccupied: boolean"],methods:["+ assignVehicle(vehicle)","+ removeVehicle()","+ canFitVehicle(type): boolean"]}},{id:"compact-spot",type:"classNode",position:{x:0,y:700},data:{label:"CompactSpot",color:"bg-green-500",attributes:[],methods:["+ canFitVehicle(type): boolean"]}},{id:"large-spot",type:"classNode",position:{x:150,y:700},data:{label:"LargeSpot",color:"bg-green-500",attributes:[],methods:["+ canFitVehicle(type): boolean"]}},{id:"handicapped-spot",type:"classNode",position:{x:300,y:700},data:{label:"HandicappedSpot",color:"bg-green-500",attributes:[],methods:["+ canFitVehicle(type): boolean"]}},{id:"vehicle",type:"classNode",position:{x:500,y:500},data:{label:"Vehicle",stereotype:"Abstract",color:"bg-yellow-600",attributes:["# licensePlate: String","# type: VehicleType"],methods:["+ getType(): VehicleType"]}},{id:"car",type:"classNode",position:{x:400,y:700},data:{label:"Car",color:"bg-yellow-500",attributes:[],methods:[]}},{id:"motorcycle",type:"classNode",position:{x:520,y:700},data:{label:"Motorcycle",color:"bg-yellow-500",attributes:[],methods:[]}},{id:"truck",type:"classNode",position:{x:640,y:700},data:{label:"Truck",color:"bg-yellow-500",attributes:[],methods:[]}},{id:"ticket",type:"classNode",position:{x:700,y:300},data:{label:"Ticket",color:"bg-pink-600",attributes:["- ticketId: String","- vehicle: Vehicle","- spot: ParkingSpot","- entryTime: long"],methods:["+ getDurationHours(): long"]}},{id:"payment",type:"classNode",position:{x:900,y:300},data:{label:"PaymentProcessor",color:"bg-indigo-600",attributes:["- pricingStrategy: PricingStrategy"],methods:["+ calculateFee(ticket): double"]}},{id:"pricing-strategy",type:"classNode",position:{x:900,y:100},data:{label:"PricingStrategy",stereotype:"Interface",color:"bg-orange-600",attributes:[],methods:["+ calculatePrice(ticket): double"]}}],edges:[{id:"e1",source:"parking-lot",target:"parking-floor",label:"1 → N",type:"smoothstep",animated:!0,style:{stroke:"#3b82f6",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#3b82f6"}},{id:"e2",source:"parking-floor",target:"parking-spot",label:"1 → N",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e3",source:"compact-spot",target:"parking-spot",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e4",source:"large-spot",target:"parking-spot",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e5",source:"handicapped-spot",target:"parking-spot",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e6",source:"car",target:"vehicle",label:"extends",type:"smoothstep",style:{stroke:"#eab308",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#eab308"}},{id:"e7",source:"motorcycle",target:"vehicle",label:"extends",type:"smoothstep",style:{stroke:"#eab308",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#eab308"}},{id:"e8",source:"truck",target:"vehicle",label:"extends",type:"smoothstep",style:{stroke:"#eab308",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#eab308"}},{id:"e9",source:"parking-spot",target:"vehicle",label:"has 0..1",type:"smoothstep",style:{stroke:"#64748b",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#64748b"}},{id:"e10",source:"parking-lot",target:"ticket",label:"generates",type:"smoothstep",style:{stroke:"#ec4899",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#ec4899"}},{id:"e11",source:"ticket",target:"vehicle",label:"for",type:"smoothstep",style:{stroke:"#64748b",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#64748b"}},{id:"e12",source:"payment",target:"pricing-strategy",label:"uses",type:"smoothstep",style:{stroke:"#f97316",strokeWidth:2,strokeDasharray:"5,5"},markerEnd:{type:"arrow",color:"#f97316"}}]},L={nodes:[{id:"game",type:"classNode",position:{x:400,y:50},data:{label:"Game",color:"bg-purple-600",attributes:["- board: Board","- players: Player[2]","- currentPlayer: Player","- moveHistory: Stack<Move>","- gameState: GameState"],methods:["+ makeMove(from, to): boolean","+ isCheck(): boolean","+ isCheckmate(): boolean","+ undoMove(): boolean"]}},{id:"board",type:"classNode",position:{x:100,y:300},data:{label:"Board",color:"bg-blue-600",attributes:["- cells: Cell[8][8]","- pieces: Map<Color, List>","- capturedPieces: List"],methods:["+ getPiece(position): Piece","+ movePiece(from, to)","+ isKingInCheck(color): boolean","+ isCheckmate(color): boolean"]}},{id:"cell",type:"classNode",position:{x:0,y:500},data:{label:"Cell",color:"bg-blue-500",attributes:["- position: Position","- piece: Piece"],methods:["+ isEmpty(): boolean"]}},{id:"piece",type:"classNode",position:{x:250,y:500},data:{label:"Piece",stereotype:"Abstract",color:"bg-green-600",attributes:["# color: Color","# position: Position","# hasMoved: boolean","# type: PieceType"],methods:["+ canMove(board, to): boolean","+ getPossibleMoves(board): List","+ getSymbol(): String"]}},{id:"king",type:"classNode",position:{x:0,y:700},data:{label:"King",color:"bg-green-500",attributes:[],methods:["+ canMove(board, to): boolean","- canCastle(board, to): boolean"]}},{id:"queen",type:"classNode",position:{x:120,y:700},data:{label:"Queen",color:"bg-green-500",attributes:[],methods:["+ canMove(board, to): boolean"]}},{id:"rook",type:"classNode",position:{x:220,y:700},data:{label:"Rook",color:"bg-green-500",attributes:[],methods:["+ canMove(board, to): boolean"]}},{id:"bishop",type:"classNode",position:{x:320,y:700},data:{label:"Bishop",color:"bg-green-500",attributes:[],methods:["+ canMove(board, to): boolean"]}},{id:"knight",type:"classNode",position:{x:420,y:700},data:{label:"Knight",color:"bg-green-500",attributes:[],methods:["+ canMove(board, to): boolean"]}},{id:"pawn",type:"classNode",position:{x:520,y:700},data:{label:"Pawn",color:"bg-green-500",attributes:[],methods:["+ canMove(board, to): boolean","- canEnPassant(board, to): boolean"]}},{id:"player",type:"classNode",position:{x:700,y:300},data:{label:"Player",color:"bg-yellow-600",attributes:["- name: String","- color: Color"],methods:["+ getName(): String","+ getColor(): Color"]}},{id:"move",type:"classNode",position:{x:500,y:150},data:{label:"Move",color:"bg-pink-600",attributes:["- piece: Piece","- from: Position","- to: Position","- capturedPiece: Piece","- timestamp: long"],methods:["+ execute()","+ undo()","+ toAlgebraicNotation(): String"]}},{id:"position",type:"classNode",position:{x:500,y:500},data:{label:"Position",color:"bg-indigo-600",attributes:["- row: int","- col: int"],methods:["+ toChessNotation(): String","+ fromChessNotation(str): Position"]}}],edges:[{id:"e1",source:"game",target:"board",label:"has 1",type:"smoothstep",animated:!0,style:{stroke:"#3b82f6",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#3b82f6"}},{id:"e2",source:"game",target:"player",label:"has 2",type:"smoothstep",style:{stroke:"#eab308",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#eab308"}},{id:"e3",source:"game",target:"move",label:"tracks",type:"smoothstep",style:{stroke:"#ec4899",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#ec4899"}},{id:"e4",source:"board",target:"cell",label:"1 → 64",type:"smoothstep",style:{stroke:"#3b82f6",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#3b82f6"}},{id:"e5",source:"cell",target:"piece",label:"has 0..1",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e6",source:"king",target:"piece",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e7",source:"queen",target:"piece",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e8",source:"rook",target:"piece",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e9",source:"bishop",target:"piece",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e10",source:"knight",target:"piece",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e11",source:"pawn",target:"piece",label:"extends",type:"smoothstep",style:{stroke:"#10b981",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#10b981"}},{id:"e12",source:"move",target:"piece",label:"references",type:"smoothstep",style:{stroke:"#64748b",strokeWidth:2,strokeDasharray:"5,5"},markerEnd:{type:"arrow",color:"#64748b"}},{id:"e13",source:"move",target:"position",label:"uses",type:"smoothstep",style:{stroke:"#6366f1",strokeWidth:2,strokeDasharray:"5,5"},markerEnd:{type:"arrow",color:"#6366f1"}},{id:"e14",source:"piece",target:"position",label:"has",type:"smoothstep",style:{stroke:"#6366f1",strokeWidth:2},markerEnd:{type:"arrowclosed",color:"#6366f1"}}]},O=({data:i})=>e.jsxs("div",{className:"bg-white border-2 border-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow min-w-[200px]",children:[e.jsxs("div",{className:`px-4 py-2 font-bold text-white text-center rounded-t-md ${i.color||"bg-blue-600"}`,children:[i.stereotype&&e.jsxs("div",{className:"text-xs italic opacity-80",children:["«",i.stereotype,"»"]}),e.jsx("div",{className:"text-base",children:i.label})]}),i.attributes&&i.attributes.length>0&&e.jsx("div",{className:"border-t-2 border-gray-800 px-3 py-2 bg-gray-50",children:i.attributes.map((a,s)=>e.jsx("div",{className:"text-xs font-mono text-gray-700 py-0.5",children:a},s))}),i.methods&&i.methods.length>0&&e.jsx("div",{className:"border-t-2 border-gray-800 px-3 py-2 bg-white",children:i.methods.map((a,s)=>e.jsx("div",{className:"text-xs font-mono text-gray-700 py-0.5",children:a},s))})]}),F={classNode:O},q=({nodes:i,edges:a})=>{const[s,u,c]=C(i),[p,n,d]=E(a);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{className:"w-5 h-5 text-blue-400"}),e.jsx("h5",{className:"text-sm font-bold text-white",children:"UML Diagram Legend"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-gray-400 font-semibold mb-2",children:"Relationships"}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[e.jsx("div",{className:"w-8 h-0.5 bg-blue-500"}),e.jsx("span",{children:"Composition (has)"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[e.jsx("div",{className:"w-8 h-0.5 bg-green-500"}),e.jsx("span",{children:"Inheritance (extends)"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[e.jsx("div",{className:"w-8 h-0.5 bg-orange-500 border-dashed border-t-2 border-orange-500"}),e.jsx("span",{children:"Dependency (uses)"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-gray-400 font-semibold mb-2",children:"Stereotypes"}),e.jsxs("div",{className:"space-y-1 text-gray-300",children:[e.jsx("div",{children:"«Interface» - Interface type"}),e.jsx("div",{children:"«Abstract» - Abstract class"}),e.jsx("div",{children:"«Singleton» - Single instance"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-gray-400 font-semibold mb-2",children:"Visibility"}),e.jsxs("div",{className:"space-y-1 text-gray-300",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-mono",children:"+"})," Public"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-mono",children:"-"})," Private"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-mono",children:"#"})," Protected"]})]})]})]})]}),e.jsx("div",{className:"w-full h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-gray-300 shadow-inner",children:e.jsxs(T,{nodes:s,edges:p,onNodesChange:c,onEdgesChange:d,nodeTypes:F,fitView:!0,attributionPosition:"bottom-left",minZoom:.2,maxZoom:1.5,defaultEdgeOptions:{animated:!1,style:{strokeWidth:2}},children:[e.jsx(N,{color:"#d1d5db",gap:20,size:1}),e.jsx(D,{className:"bg-white border border-gray-300 rounded-lg shadow-lg"}),e.jsx(R,{nodeColor:l=>{switch(l.type){case"classNode":return"#3b82f6";default:return"#94a3b8"}},nodeStrokeWidth:3,zoomable:!0,pannable:!0,className:"bg-white border border-gray-300 rounded-lg shadow-lg"})]})}),e.jsx("div",{className:"bg-blue-900/20 border border-blue-700/30 rounded-lg p-3",children:e.jsxs("div",{className:"flex items-start gap-3 text-sm text-gray-300",children:[e.jsx(g,{className:"w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{children:e.jsx("strong",{children:"Interactive Controls:"})}),e.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-xs",children:[e.jsx("li",{children:"Click and drag nodes to rearrange the diagram"}),e.jsx("li",{children:"Scroll to zoom in/out"}),e.jsx("li",{children:"Click and drag background to pan around"}),e.jsx("li",{children:"Use controls (bottom-left) for additional options"}),e.jsx("li",{children:"Minimap (bottom-right) shows overall structure"})]})]})]})})]})},U=()=>{const[i,a]=v.useState(null),[s,u]=v.useState({}),c=t=>{a(i===t?null:t)},p=(t,o)=>{u({...s,[t]:o})},n=t=>s[t]||"overview",d=t=>{switch(t){case"Easy":return"bg-green-900/30 text-green-400 border-green-700";case"Medium":return"bg-yellow-900/30 text-yellow-400 border-yellow-700";case"Hard":return"bg-red-900/30 text-red-400 border-red-700";default:return"bg-gray-900/30 text-gray-400 border-gray-700"}},l=t=>{switch(t){case"elevator":return j;case"parking-lot":return A;case"chess":return L;default:return null}};return e.jsx("div",{className:"h-full overflow-y-auto bg-gray-900 p-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-6",children:[e.jsxs("h1",{className:"text-4xl font-bold text-white mb-3 flex items-center gap-3",children:[e.jsx(m,{className:"w-10 h-10 text-orange-500"}),"Low Level Design Examples"]}),e.jsx("p",{className:"text-lg text-gray-400",children:"Comprehensive object-oriented design problems with Java implementations, design patterns, and interview tips."})]}),e.jsx("div",{className:"space-y-6",children:I.map(t=>e.jsxs("div",{className:"bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-600",children:[e.jsxs("button",{onClick:()=>c(t.id),className:"w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/50",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`
                    px-4 py-2 rounded-lg flex items-center justify-center font-bold text-sm border
                    ${d(t.difficulty)}
                  `,children:t.difficulty}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-semibold text-white",children:t.title}),e.jsx("p",{className:"text-sm text-gray-400 mt-1",children:t.description})]})]}),i===t.id?e.jsx(f,{className:"w-6 h-6 text-gray-400 flex-shrink-0"}):e.jsx(P,{className:"w-6 h-6 text-gray-400 flex-shrink-0"})]}),i===t.id&&e.jsxs("div",{className:"border-t border-gray-700",children:[e.jsx("div",{className:"flex items-center gap-2 px-6 py-3 bg-gray-900/50 border-b border-gray-700 overflow-x-auto",children:["overview","patterns","classes","tradeoffs","tips"].map(o=>e.jsxs("button",{onClick:()=>p(t.id,o),className:`
                          px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap
                          ${n(t.id)===o?"bg-orange-500 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"}
                        `,children:[o==="overview"&&"📋 Overview",o==="patterns"&&"🎨 Design Patterns",o==="classes"&&"💻 Classes",o==="tradeoffs"&&"⚖️ Tradeoffs",o==="tips"&&"💡 Interview Tips"]},o))}),e.jsxs("div",{className:"p-6",children:[n(t.id)==="overview"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-xl font-semibold text-white mb-4 flex items-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 text-green-500"}),"Requirements"]}),e.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:t.requirements.map((o,r)=>e.jsxs("li",{className:"flex items-start gap-3 text-gray-300 text-sm bg-gray-900/50 p-3 rounded-lg",children:[e.jsx(b,{className:"w-4 h-4 text-green-500 shrink-0 mt-0.5"}),e.jsx("span",{children:o})]},r))})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-xl font-semibold text-white mb-4 flex items-center gap-2",children:[e.jsx(w,{className:"w-5 h-5 text-blue-500"}),"Class Relationships"]}),e.jsx("div",{className:"bg-gray-900/50 rounded-lg p-4 space-y-2",children:t.classRelationships.map((o,r)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-300 text-sm font-mono",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-500"}),o]},r))})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-xl font-semibold text-white mb-4 flex items-center gap-2",children:[e.jsx(h,{className:"w-5 h-5 text-purple-500"}),"Interactive Class Diagram"]}),e.jsx("p",{className:"text-sm text-gray-400 mb-4",children:"Drag nodes to rearrange • Scroll to zoom • Click and drag background to pan"}),e.jsx(q,{nodes:l(t.id).nodes,edges:l(t.id).edges})]})]}),n(t.id)==="patterns"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h4",{className:"text-xl font-semibold text-white mb-4 flex items-center gap-2",children:[e.jsx(h,{className:"w-5 h-5 text-purple-500"}),"Design Patterns Used"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:t.designPatterns.map((o,r)=>e.jsxs("div",{className:"bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-700/30 rounded-lg p-5",children:[e.jsxs("h5",{className:"text-lg font-bold text-purple-300 mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center",children:r+1}),o.name]}),e.jsxs("p",{className:"text-gray-300 text-sm leading-relaxed",children:[e.jsx("span",{className:"font-semibold text-purple-400",children:"Usage:"})," ",o.usage]})]},r))})]}),n(t.id)==="classes"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("h4",{className:"text-xl font-semibold text-white mb-4 flex items-center gap-2",children:[e.jsx(S,{className:"w-5 h-5 text-blue-500"}),"Class Implementations (Java)"]}),t.classes.map((o,r)=>e.jsxs("div",{className:"bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-900/30 to-purple-900/30 px-5 py-3 border-b border-gray-700",children:[e.jsx("h5",{className:"text-lg font-bold text-white",children:o.name}),e.jsx("p",{className:"text-sm text-gray-400 mt-1",children:o.description})]}),e.jsx("div",{className:"p-4",children:e.jsx(M,{language:"java",code:o.code})})]},r))]}),n(t.id)==="tradeoffs"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h4",{className:"text-xl font-semibold text-white mb-4 flex items-center gap-2",children:[e.jsx(y,{className:"w-5 h-5 text-yellow-500"}),"Design Tradeoffs"]}),e.jsx("div",{className:"space-y-4",children:t.tradeoffs.map((o,r)=>e.jsx("div",{className:"bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-700/30 rounded-lg p-5",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx(y,{className:"w-5 h-5 text-yellow-400"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"text-lg font-bold text-yellow-300 mb-2",children:o.aspect}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-sm text-gray-300",children:[e.jsx("span",{className:"font-semibold text-yellow-400",children:"Options:"})," ",o.options]}),e.jsxs("p",{className:"text-sm text-gray-300",children:[e.jsx("span",{className:"font-semibold text-yellow-400",children:"Tradeoff:"})," ",o.tradeoff]})]})]})]})},r))})]}),n(t.id)==="tips"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h4",{className:"text-xl font-semibold text-white mb-4 flex items-center gap-2",children:[e.jsx(x,{className:"w-5 h-5 text-green-500"}),"Interview Tips & Best Practices"]}),e.jsx("div",{className:"space-y-3",children:t.interviewTips.map((o,r)=>e.jsxs("div",{className:"flex items-start gap-3 bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-700/30 rounded-lg p-4",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-green-400 font-bold text-sm",children:r+1})}),e.jsx("p",{className:"text-gray-300 text-sm leading-relaxed pt-1",children:o})]},r))}),e.jsxs("div",{className:"mt-6 bg-blue-900/20 border border-blue-700/30 rounded-lg p-5",children:[e.jsxs("h5",{className:"text-lg font-bold text-blue-300 mb-3 flex items-center gap-2",children:[e.jsx(k,{className:"w-5 h-5"}),"General Interview Strategy"]}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-400 mt-1",children:"•"}),e.jsx("span",{children:"Start with clarifying questions - understand requirements fully before coding"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-400 mt-1",children:"•"}),e.jsx("span",{children:"Draw class diagrams first - visualize relationships before implementation"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-400 mt-1",children:"•"}),e.jsx("span",{children:"Identify design patterns - mention which patterns you're using and why"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-400 mt-1",children:"•"}),e.jsx("span",{children:"Discuss tradeoffs - show you understand different approaches and their implications"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-400 mt-1",children:"•"}),e.jsx("span",{children:"Consider extensibility - how would you add new features or handle scale"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-400 mt-1",children:"•"}),e.jsx("span",{children:"Write clean code - follow SOLID principles and maintain consistent naming"})]})]})]})]})]})]})]},t.id))}),e.jsxs("div",{className:"bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-700/30 rounded-lg p-6 mt-8",children:[e.jsxs("h3",{className:"text-lg font-bold text-orange-300 mb-3 flex items-center gap-2",children:[e.jsx(m,{className:"w-5 h-5"}),"About These Examples"]}),e.jsxs("p",{className:"text-gray-300 text-sm leading-relaxed",children:["These LLD examples are designed to be"," ",e.jsx("strong",{children:"interview-ready"})," with comprehensive Java implementations. Each example includes complete class hierarchies, design pattern applications, detailed tradeoff analysis, and practical interview tips. The code follows industry best practices including SOLID principles, proper encapsulation, and clear documentation. Practice implementing these from scratch to build muscle memory for technical interviews."]})]})]})})};export{U as default};
