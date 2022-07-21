export const Microservices : {[key: string]: string} = {
    // give like this : 
    // "ms-name" : "http://localhost:[port-no.]/[context-root]"
    "auth"      : "http://localhost:9191/auth",
       
    "checklist" : "http://localhost:9191/checklist",
    // "checklist" : "AUDUT-CHECKLIST/",
    "benchmark" : "http://localhost:9191/benchmark",
    // "benchmark" : "AUDIT-BENCHMARK/",
    "severity"  : "http://localhost:9191/severity"
    // "severity"  : "AUDUT-SEVERITY/"
    
}