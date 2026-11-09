import{j as e}from"./ui-l-wn3dQa.js";import"./vendor-C-RugAsD.js";import{I as l}from"./InteractiveDiagram-DWUERs3K.js";import{C as s}from"./CodeBlock-CZ62hYHy.js";import{M as a}from"./reactflow-Bog5v55p.js";/* empty css              */import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const g=()=>{const r=[{id:"client",position:{x:350,y:0},data:{label:"Client"},style:{background:"#1f2937",color:"white",border:"1px solid #374151",width:120}},{id:"m1",position:{x:250,y:100},data:{label:"Master Node"},style:{background:"#6366f1",color:"white",border:"1px solid #4f46e5",width:140}},{id:"m2",position:{x:450,y:100},data:{label:"Master Eligible"},style:{background:"#4b5563",color:"white",border:"1px solid #374151",width:140}},{id:"d1",position:{x:50,y:250},data:{label:"Data Node 1"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:180,height:200}},{id:"d2",position:{x:300,y:250},data:{label:"Data Node 2"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:180,height:200}},{id:"d3",position:{x:550,y:250},data:{label:"Data Node 3"},style:{background:"#10b981",color:"white",border:"1px solid #059669",width:180,height:200}},{id:"s0p",position:{x:80,y:320},data:{label:"Shard 0 (P)"},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:120,zIndex:10}},{id:"s0r",position:{x:330,y:320},data:{label:"Shard 0 (R)"},style:{background:"#3b82f6",color:"white",border:"1px solid #2563eb",width:120,zIndex:10}},{id:"s1p",position:{x:330,y:380},data:{label:"Shard 1 (P)"},style:{background:"#f59e0b",color:"white",border:"1px solid #d97706",width:120,zIndex:10}},{id:"s1r",position:{x:580,y:320},data:{label:"Shard 1 (R)"},style:{background:"#3b82f6",color:"white",border:"1px solid #2563eb",width:120,zIndex:10}}],t=[{id:"e1",source:"client",target:"m1",animated:!0,style:{stroke:"#9ca3af"}},{id:"e2",source:"m1",target:"d1",label:"State",style:{stroke:"#6366f1",strokeDasharray:"5,5"},markerEnd:{type:a.ArrowClosed}},{id:"e3",source:"m1",target:"d2",style:{stroke:"#6366f1",strokeDasharray:"5,5"},markerEnd:{type:a.ArrowClosed}},{id:"e4",source:"m1",target:"d3",style:{stroke:"#6366f1",strokeDasharray:"5,5"},markerEnd:{type:a.ArrowClosed}},{id:"r1",source:"s0p",target:"s0r",label:"Replication",animated:!0,style:{stroke:"#f59e0b"},markerEnd:{type:a.ArrowClosed}},{id:"r2",source:"s1p",target:"s1r",label:"Replication",animated:!0,style:{stroke:"#f59e0b"},markerEnd:{type:a.ArrowClosed}}];return e.jsxs("div",{className:"max-w-5xl mx-auto text-gray-300 space-y-16 pb-20",children:[e.jsxs("div",{className:"border-b border-gray-700 pb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Elasticsearch: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-400",children:"A comprehensive guide to the distributed search and analytics engine built on Apache Lucene."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-green-600 text-sm px-3 py-1 rounded-full",children:"01"}),"Architecture & Core Concepts"]}),e.jsxs("p",{className:"text-lg leading-relaxed mb-6",children:["Elasticsearch is a"," ",e.jsx("strong",{children:"distributed, RESTful search and analytics engine"})," ","built on Apache Lucene, designed for horizontal scalability and real-time search."]}),e.jsxs("div",{className:"bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Cluster Architecture"}),e.jsx(l,{initialNodes:r,initialEdges:t,title:"Elasticsearch Cluster Topology"}),e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400",children:"Master Node"}),e.jsx("p",{className:"text-sm mt-2",children:"Manages cluster state, creates/deletes indexes, assigns shards. Only one active at a time."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400",children:"Data Nodes"}),e.jsx("p",{className:"text-sm mt-2",children:"Store data and execute data-related operations (search, aggregations)."})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-orange-900/50",children:[e.jsx("strong",{className:"text-orange-400",children:"Shards"}),e.jsx("p",{className:"text-sm mt-2",children:"Primary shards hold data. Replica shards provide redundancy and scale reads."})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Inverted Index"}),e.jsx(s,{language:"text",code:`Document 1: "The quick brown fox"
Document 2: "The brown dog"
Document 3: "Quick fox jumps"

Inverted Index:
Term      | Document IDs
----------|-------------
brown     | [1, 2]
dog       | [2]
fox       | [1, 3]
jumps     | [3]
quick     | [1, 3]  # Lowercased
the       | [1, 2]

# Search for "quick fox":
# 1. Lookup "quick" → [1, 3]
# 2. Lookup "fox" → [1, 3]
# 3. Intersection → [1, 3]
# Result: Documents 1 and 3`})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-blue-600 text-sm px-3 py-1 rounded-full",children:"02"}),"Data Model & Storage"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Documents and Mappings"}),e.jsx(s,{language:"python",code:`from elasticsearch import Elasticsearch

es = Elasticsearch(['https://localhost:9200'])

# Create index with explicit mapping
es.indices.create(index='products', body={
    'mappings': {
        'properties': {
            'name': {'type': 'text'},           # Full-text search
            'category': {'type': 'keyword'},    # Exact match, aggregations
            'price': {'type': 'float'},
            'description': {'type': 'text', 
                          'analyzer': 'english'},  # Custom analyzer
            'tags': {'type': 'keyword'},         # Array of keywords
            'created_at': {'type': 'date'},
            'location': {'type': 'geo_point'}    # Geospatial
        }
    }
})

# Index a document
doc = {
    'name': 'Laptop',
    'category': 'Electronics',
    'price': 999.99,
    'description': 'High-performance laptop for developers',
    'tags': ['computer', 'portable'],
    'created_at': '2024-01-15T10:00:00',
    'location': {'lat': 40.7128, 'lon': -74.0060}
}

es.index(index='products', id=1, document=doc)`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Field Types"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-blue-900/50",children:[e.jsx("strong",{className:"text-blue-400 block mb-2",children:"text vs keyword"}),e.jsx(s,{language:"json",code:`{
  "title": {
    "type": "text"     // Analyzed, searchable
  },
  "status": {
    "type": "keyword"  // Not analyzed, exact match
  }
}`})]}),e.jsxs("div",{className:"bg-gray-900 p-4 rounded border border-green-900/50",children:[e.jsx("strong",{className:"text-green-400 block mb-2",children:"Numeric & Date"}),e.jsx(s,{language:"json",code:`{
  "price": {"type": "float"},
  "quantity": {"type": "integer"},
  "timestamp": {
    "type": "date",
    "format": "yyyy-MM-dd HH:mm:ss"
  }
}`})]})]})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Mapping Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use"," ",e.jsx("strong",{children:"keyword"})," for filtering, sorting, aggregations"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use"," ",e.jsx("strong",{children:"text"})," for full-text search"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Define mapping explicitly (avoid dynamic mapping in production)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Enable"," ",e.jsx("strong",{children:"doc_values"})," for aggregations and sorting"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-purple-600 text-sm px-3 py-1 rounded-full",children:"03"}),"Querying & Indexing"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Query DSL"}),e.jsx(s,{language:"python",code:`# Match query (full-text search)
query = {
    'query': {
        'match': {
            'description': 'high performance laptop'
        }
    }
}
results = es.search(index='products', body=query)

# Bool query (combine conditions)
query = {
    'query': {
        'bool': {
            'must': [
                {'match': {'category': 'Electronics'}}
            ],
            'filter': [
                {'range': {'price': {'gte': 500, 'lte': 1500}}}
            ],
            'should': [
                {'match': {'tags': 'portable'}}
            ],
            'must_not': [
                {'term': {'status': 'discontinued'}}
            ]
        }
    }
}

# Term query (exact match)
query = {
    'query': {
        'term': {'category.keyword': 'Electronics'}
    }
}

# Multi-match (search across multiple fields)
query = {
    'query': {
        'multi_match': {
            'query': 'laptop',
            'fields': ['name^2', 'description']  # Boost name field
        }
    }
}`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Aggregations"}),e.jsx(s,{language:"python",code:`# Metrics aggregation (avg, sum, min, max)
query = {
    'aggs': {
        'avg_price': {
            'avg': {'field': 'price'}
        },
        'total_revenue': {
            'sum': {'field': 'price'}
        }
    }
}

# Bucket aggregation (group by)
query = {
    'aggs': {
        'categories': {
            'terms': {
                'field': 'category.keyword',
                'size': 10
            },
            'aggs': {
                'avg_price': {
                    'avg': {'field': 'price'}
                }
            }
        },
        'price_histogram': {
            'histogram': {
                'field': 'price',
                'interval': 100
            }
        }
    }
}

# Date histogram (time-series)
query = {
    'aggs': {
        'sales_over_time': {
            'date_histogram': {
                'field': 'created_at',
                'calendar_interval': '1d'
            }
        }
    }
}`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Analyzers"}),e.jsx(s,{language:"json",code:`// Custom analyzer
{
  "settings": {
    "analysis": {
      "analyzer": {
        "my_analyzer": {
          "type": "custom",
          "tokenizer": "standard",
          "filter": ["lowercase", "stop", "snowball"]
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "content": {
        "type": "text",
        "analyzer": "my_analyzer"
      }
    }
  }
}

// Analysis process:
// Input: "The Quick Brown Foxes"
// 1. Tokenizer: ["The", "Quick", "Brown", "Foxes"]
// 2. Lowercase: ["the", "quick", "brown", "foxes"]
// 3. Stop words: ["quick", "brown", "foxes"]
// 4. Snowball (stemming): ["quick", "brown", "fox"]`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-red-600 text-sm px-3 py-1 rounded-full",children:"04"}),"Scaling & Distribution"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Shard Sizing"}),e.jsx(s,{language:"python",code:`# Create index with 5 primary shards, 1 replica
es.indices.create(index='logs', body={
    'settings': {
        'number_of_shards': 5,
        'number_of_replicas': 1
    }
})

# Shard sizing guidelines:
# - Aim for 20-50GB per shard
# - Total shards = primary_shards × (1 + replicas)
# - Example: 500GB data → 10-25 primary shards

# Cannot change primary shard count after creation
# Must reindex to change shard count

# Dynamic replica adjustment:
es.indices.put_settings(index='logs', body={
    'number_of_replicas': 2  # Increase replicas
})`})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Index Lifecycle Management (ILM)"}),e.jsx(s,{language:"json",code:`// Define ILM policy
{
  "policy": {
    "phases": {
      "hot": {
        "actions": {
          "rollover": {
            "max_size": "50GB",
            "max_age": "1d"
          }
        }
      },
      "warm": {
        "min_age": "7d",
        "actions": {
          "shrink": {"number_of_shards": 1},
          "forcemerge": {"max_num_segments": 1}
        }
      },
      "cold": {
        "min_age": "30d",
        "actions": {
          "freeze": {}
        }
      },
      "delete": {
        "min_age": "90d",
        "actions": {
          "delete": {}
        }
      }
    }
  }
}`})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-orange-600 text-sm px-3 py-1 rounded-full",children:"05"}),"Performance Optimization"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Bulk Indexing"}),e.jsx(s,{language:"python",code:`from elasticsearch.helpers import bulk

# Bulk indexing (much faster than individual inserts)
actions = [
    {
        '_index': 'products',
        '_id': i,
        '_source': {
            'name': f'Product {i}',
            'price': i * 10
        }
    }
    for i in range(10000)
]

bulk(es, actions, chunk_size=500, request_timeout=60)

# Bulk performance tips:
# ✓ Use chunk_size 500-1000
# ✓ Disable refresh during bulk: {'refresh_interval': '-1'}
# ✓ Increase bulk queue size
# ✓ Use multiple threads`})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-yellow-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-yellow-400 mb-4",children:"⚡ Search Optimization"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use"," ",e.jsx("strong",{children:"filter context"})," instead of query context (cacheabled)"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Limit"," ",e.jsx("strong",{children:"size"})," and use pagination"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use"," ",e.jsx("strong",{children:"_source filtering"})," to return only needed fields"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Leverage"," ",e.jsx("strong",{children:"query cache"})," for repeated queries"]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-400",children:"•"})," Use"," ",e.jsx("strong",{children:"routing"})," to target specific shards"]})]})]})]})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"bg-pink-600 text-sm px-3 py-1 rounded-full",children:"06"}),"Use Cases & Comparisons"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900 p-6 rounded-xl border border-green-900/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-green-400 mb-4",children:"🎯 When to Use Elasticsearch"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-green-400 font-bold mb-2",children:"Perfect For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"✓ Full-text search (e-commerce, docs)"}),e.jsx("li",{children:"✓ Log analytics (ELK stack)"}),e.jsx("li",{children:"✓ Application monitoring (APM)"}),e.jsx("li",{children:"✓ Security analytics (SIEM)"}),e.jsx("li",{children:"✓ Metrics and time-series data"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-red-400 font-bold mb-2",children:"Not Ideal For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"→ Primary data store (not durable)"}),e.jsx("li",{children:"→ ACID transactions"}),e.jsx("li",{children:"→ Frequent updates (expensive)"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"ELK Stack"}),e.jsx(s,{language:"text",code:`Elasticsearch: Search and analytics engine
Logstash:      Data processing pipeline (collect, parse, enrich)
Kibana:        Visualization and UI

Flow:
Logs → Logstash → Elasticsearch → Kibana

Modern alternative (Elastic Stack):
Logs → Beats/Filebeat → Elasticsearch → Kibana`})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["📚 Further Reading:"," ",e.jsx("a",{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",className:"text-blue-400 hover:underline",children:"Official Elasticsearch Documentation"})]})})]})};export{g as default};
