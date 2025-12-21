import "jest-canvas-mock";
import "@testing-library/jest-dom";

jest.mock("colorthief", () => {
  return {
    __esModule: true,
    default: class {
      getColor() {
        return [0, 0, 0];
      }
      getPalette() {
        return [[0, 0, 0]];
      }
    }
  };
});

window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};
