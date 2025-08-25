// Script to generate 20 random blog posts
const samplePosts = [
    {
        title: "Getting Started with Spring Boot: A Comprehensive Guide",
        content: `Spring Boot has revolutionized the way we build Java applications by providing auto-configuration and convention-over-configuration principles. In this comprehensive guide, we'll explore the fundamentals of Spring Boot and how it simplifies enterprise application development.

Spring Boot eliminates much of the boilerplate configuration that traditional Spring applications require. With its embedded server capabilities, you can run applications as standalone JAR files without needing external application servers.

Key features include:
- Auto-configuration based on classpath dependencies
- Embedded servers (Tomcat, Jetty, Undertow)
- Production-ready metrics and health checks
- Simplified dependency management through starter POMs

Getting started is as simple as creating a main class annotated with @SpringBootApplication and running it. The framework handles the rest, setting up a web server, configuring beans, and preparing your application for requests.

This approach significantly reduces development time and allows developers to focus on business logic rather than infrastructure concerns.`,
        category: "Technology",
        tags: ["Spring Boot", "Java", "Backend", "Framework"]
    },
    {
        title: "React Hooks: Transforming Functional Components",
        content: `React Hooks introduced in version 16.8 have fundamentally changed how we write React applications. They allow functional components to have state and lifecycle methods, eliminating the need for class components in many scenarios.

The useState hook enables state management in functional components. Instead of this.setState, you now use the setter function returned by useState. This makes components more predictable and easier to test.

useEffect replaces componentDidMount, componentDidUpdate, and componentWillUnmount with a single, unified API. You can specify dependencies to control when effects run, making performance optimization straightforward.

Custom hooks enable code reuse between components. You can extract stateful logic into reusable functions that other components can consume. This promotes the DRY principle and makes testing easier.

Other useful hooks include useContext for consuming context, useCallback for memoizing functions, and useMemo for expensive calculations. Each hook serves a specific purpose in the React ecosystem.

The mental model shift from class-based to hook-based components takes time, but the benefits in terms of code clarity and reusability are substantial.`,
        category: "Technology",
        tags: ["React", "JavaScript", "Frontend", "Hooks"]
    },
    {
        title: "Java Stream API: Functional Programming in Action",
        content: `Java 8's Stream API brought functional programming concepts to the Java ecosystem, enabling developers to process collections in a more declarative and efficient manner.

Streams represent sequences of elements that support various operations like filtering, mapping, and reducing. Unlike collections, streams don't store data; they process it on-demand, making them memory-efficient for large datasets.

The filter() method allows you to select elements based on a predicate, while map() transforms each element. These operations can be chained together to create powerful data processing pipelines.

Collectors provide a way to accumulate stream elements into collections or other data structures. The collect() method with Collectors.toList(), Collectors.toMap(), or custom collectors makes result aggregation straightforward.

Parallel streams leverage multi-core processors by automatically distributing work across threads. Simply calling parallelStream() instead of stream() can significantly improve performance for CPU-intensive operations.

Best practices include using method references when possible, avoiding stateful intermediate operations, and being mindful of the performance implications of parallel processing.`,
        category: "Technology",
        tags: ["Java", "Streams", "Functional Programming", "Performance"]
    },
    {
        title: "Spring Security: Securing Your Web Applications",
        content: `Spring Security provides comprehensive authentication and authorization capabilities for Java applications. It integrates seamlessly with Spring Boot to secure REST APIs, web applications, and microservices.

Authentication determines who the user is, while authorization controls what they can access. Spring Security supports various authentication mechanisms including form-based login, OAuth2, JWT tokens, and LDAP integration.

Method-level security using @PreAuthorize and @PostAuthorize annotations allows fine-grained access control. You can secure individual methods based on user roles, permissions, or custom security expressions.

CSRF protection is enabled by default in Spring Security, safeguarding applications against cross-site request forgery attacks. For REST APIs, you might disable CSRF and rely on token-based authentication.

Password encoding using BCrypt or other strong hashing algorithms ensures user credentials are stored securely. Spring Security provides built-in support for various encoding strategies.

Security configurations can be customized through SecurityConfig classes that extend WebSecurityConfigurerAdapter. This allows you to define custom authentication providers, configure CORS settings, and set up security filters.`,
        category: "Technology",
        tags: ["Spring Security", "Java", "Authentication", "Web Security"]
    },
    {
        title: "JavaScript ES6+ Features Every Developer Should Know",
        content: `ECMAScript 6 and subsequent versions have introduced powerful features that make JavaScript more expressive and developer-friendly. Understanding these features is crucial for modern web development.

Arrow functions provide concise syntax for function expressions and lexically bind the 'this' value. They're particularly useful for array methods like map, filter, and reduce, making functional programming more accessible.

Template literals with backticks enable string interpolation and multi-line strings. The \${} syntax for embedding expressions makes string formatting more readable than concatenation.

Destructuring assignment allows extracting values from arrays and objects into distinct variables. This feature reduces boilerplate code and makes data extraction more intuitive.

const and let replace var with block-scoping behavior. const prevents reassignment while let provides block-scoped variables, reducing common bugs related to variable hoisting.

Promises and async/await syntax simplify asynchronous programming. They replace callback hell with more readable and maintainable code structures for handling HTTP requests and other async operations.

Modules with import/export statements enable better code organization and dependency management. They support tree shaking and static analysis tools for optimized builds.`,
        category: "Technology",
        tags: ["JavaScript", "ES6", "Frontend", "Modern JavaScript"]
    },
    {
        title: "Building RESTful APIs with Spring Boot and JPA",
        content: `Creating REST APIs with Spring Boot and JPA provides a robust foundation for backend services. The combination offers powerful data persistence capabilities with minimal configuration.

Spring Data JPA eliminates boilerplate database code by providing repository interfaces with built-in CRUD operations. Custom queries can be defined using method naming conventions or @Query annotations.

Entity relationships are handled through JPA annotations like @OneToMany, @ManyToOne, and @ManyToMany. Proper fetch strategies (EAGER vs LAZY) are crucial for performance optimization.

ResponseEntity provides fine-grained control over HTTP responses, including status codes, headers, and body content. This is essential for building professional REST APIs that follow HTTP standards.

Exception handling using @ControllerAdvice allows centralized error management. Custom exception classes and global exception handlers ensure consistent error responses across your API.

Validation with Bean Validation annotations (@NotNull, @Size, @Email) ensures data integrity at the API layer. Combined with @Valid annotations, validation becomes declarative and maintainable.

API documentation with Swagger/OpenAPI provides interactive documentation for consumers. Spring Boot integrates easily with springdoc-openapi for automatic API documentation generation.`,
        category: "Technology",
        tags: ["Spring Boot", "REST API", "JPA", "Backend"]
    },
    {
        title: "React State Management: From useState to Redux",
        content: `State management is a fundamental aspect of React development. As applications grow in complexity, choosing the right state management approach becomes crucial for maintainability and performance.

useState is perfect for local component state. It's simple, predictable, and sufficient for most component-level state needs. The functional update pattern helps avoid stale closures in event handlers.

useContext provides a way to share state between components without prop drilling. It's ideal for theme data, user authentication state, or other global application data that many components need.

useReducer offers more predictable state updates for complex state logic. It's particularly useful when state transitions depend on previous state or when multiple actions modify the same state.

Redux becomes valuable in large applications with complex state interactions. Its unidirectional data flow, time-travel debugging, and middleware ecosystem make it powerful for enterprise applications.

Redux Toolkit (RTK) simplifies Redux usage with utilities like createSlice and createAsyncThunk. It reduces boilerplate code while maintaining Redux's benefits of predictable state management.

Choose state management tools based on application complexity, team preferences, and performance requirements. Start simple with useState and evolve as needs become more complex.`,
        category: "Technology",
        tags: ["React", "State Management", "Redux", "JavaScript"]
    },
    {
        title: "Java Design Patterns in Modern Development",
        content: `Design patterns provide reusable solutions to common programming problems. In Java development, understanding and applying these patterns leads to more maintainable and scalable code.

The Singleton pattern ensures a class has only one instance. In Spring applications, beans are singletons by default, making this pattern less relevant but still useful for certain scenarios like configuration managers.

Factory patterns abstract object creation, making code more flexible and testable. The Factory Method and Abstract Factory patterns are particularly useful in frameworks and libraries where object creation needs to be customized.

Observer pattern facilitates loose coupling between objects. Spring's event system and reactive programming libraries like RxJava implement variations of this pattern for asynchronous communication.

Strategy pattern enables selecting algorithms at runtime. It's commonly used in payment processing, sorting algorithms, and validation logic where behavior needs to be switchable.

Decorator pattern adds functionality to objects without altering their structure. Java's IO streams and Spring's AOP proxies demonstrate this pattern in action.

Builder pattern simplifies construction of complex objects. Libraries like Lombok generate builder code, while frameworks like Jackson use builders for JSON deserialization.

Modern Java features like lambda expressions and streams have made some patterns less necessary while making others more elegant to implement.`,
        category: "Technology",
        tags: ["Java", "Design Patterns", "Software Architecture", "Best Practices"]
    },
    {
        title: "Modern JavaScript Testing with Jest and React Testing Library",
        content: `Testing JavaScript applications has evolved significantly with modern tools like Jest and React Testing Library. These tools emphasize testing user behavior rather than implementation details.

Jest provides a comprehensive testing framework with features like snapshot testing, mocking, and code coverage. Its zero-configuration approach makes it easy to start testing immediately.

React Testing Library encourages testing components from the user's perspective. Instead of testing internal state or methods, you test what users see and interact with.

The render function creates a virtual DOM representation of components, while queries like getByText and getByRole help locate elements as users would. This approach leads to more robust tests.

userEvent library simulates user interactions more realistically than fireEvent. It handles focus, typing sequences, and complex interactions that mirror real user behavior.

Mocking with Jest allows testing components in isolation. You can mock API calls, external libraries, and child components to focus on the component under test.

Testing async operations requires waitFor and findBy queries that handle promises and state updates. This ensures tests wait for actual changes rather than making assumptions about timing.

Good tests are readable, maintainable, and provide confidence in refactoring. Focus on testing behavior, use descriptive test names, and organize tests logically for maximum effectiveness.`,
        category: "Technology",
        tags: ["JavaScript", "Testing", "Jest", "React Testing Library"]
    },
    {
        title: "Spring Boot Microservices Architecture",
        content: `Microservices architecture with Spring Boot enables building scalable, maintainable distributed systems. Each service owns its data and business logic, communicating through well-defined APIs.

Service discovery with tools like Eureka or Consul allows services to find and communicate with each other dynamically. Spring Cloud provides Netflix OSS integrations for service registry and discovery.

API Gateway patterns centralize cross-cutting concerns like authentication, rate limiting, and request routing. Spring Cloud Gateway offers powerful routing and filtering capabilities for microservices architectures.

Configuration management becomes crucial in distributed systems. Spring Cloud Config provides externalized configuration management with Git-based repositories and refresh capabilities.

Circuit breaker patterns prevent cascade failures when services become unavailable. Hystrix and Resilience4j provide fault tolerance patterns that gracefully handle service dependencies.

Distributed tracing with tools like Zipkin helps debug request flows across multiple services. Spring Cloud Sleuth automatically instruments HTTP requests and message exchanges.

Event-driven architecture using message brokers like RabbitMQ or Apache Kafka enables loose coupling between services. Spring Integration and Spring Cloud Stream simplify message-driven microservices.

Container deployment with Docker and orchestration with Kubernetes align perfectly with microservices principles, providing deployment flexibility and operational benefits.`,
        category: "Technology",
        tags: ["Spring Boot", "Microservices", "Distributed Systems", "Cloud"]
    },
    {
        title: "JavaScript Performance Optimization Techniques",
        content: `JavaScript performance optimization is crucial for delivering smooth user experiences. Understanding how JavaScript engines work helps identify and resolve performance bottlenecks.

Memory management through proper variable scoping and avoiding memory leaks is fundamental. Avoid global variables, properly remove event listeners, and be mindful of closure usage in long-running applications.

DOM manipulation is expensive, so batch operations and use DocumentFragment for multiple changes. Virtual DOM libraries like React optimize this by diffing changes before applying them.

Debouncing and throttling prevent excessive function calls during rapid user interactions like scrolling or typing. These techniques significantly improve performance for event-heavy applications.

Code splitting and lazy loading reduce initial bundle sizes. Dynamic imports enable loading code only when needed, improving perceived performance and reducing time-to-interactive.

Image optimization through proper formats (WebP, AVIF), lazy loading, and responsive images can dramatically improve loading performance. The Intersection Observer API enables efficient lazy loading.

Caching strategies at various levels (HTTP caching, service workers, application-level caching) reduce redundant network requests and computation.

Profiling tools in browser DevTools help identify performance bottlenecks. The Performance tab shows detailed timing information, while the Memory tab helps detect memory leaks and optimization opportunities.`,
        category: "Technology",
        tags: ["JavaScript", "Performance", "Optimization", "Frontend"]
    },
    {
        title: "Building Reactive Applications with Spring WebFlux",
        content: `Spring WebFlux provides a reactive programming model for building non-blocking, asynchronous web applications. It's particularly beneficial for I/O-intensive applications that need to handle high concurrency.

Reactive Streams specification defines the foundation for asynchronous stream processing with non-blocking backpressure. Publishers produce data, while Subscribers consume it at their own pace.

Mono represents a stream of 0 or 1 element, while Flux represents 0 to N elements. These types provide operators for transforming, filtering, and combining reactive streams.

Functional programming style with WebFlux uses RouterFunction and HandlerFunction instead of traditional @Controller annotations. This approach offers more flexibility and better testability.

Backpressure handling prevents fast producers from overwhelming slow consumers. WebFlux automatically manages backpressure, but understanding it helps design efficient reactive applications.

Error handling in reactive streams uses operators like onErrorReturn, onErrorResume, and doOnError. Proper error handling ensures application resilience and provides meaningful feedback to clients.

Integration with reactive databases like R2DBC enables end-to-end reactive applications. Traditional blocking JDBC drivers would negate WebFlux benefits by blocking threads.

Testing reactive applications requires special considerations with StepVerifier and WebTestClient. These tools help verify reactive stream behavior and timing.`,
        category: "Technology",
        tags: ["Spring WebFlux", "Reactive Programming", "Java", "Non-blocking"]
    },
    {
        title: "React Performance Optimization: Best Practices",
        content: `React performance optimization involves understanding how React works under the hood and applying techniques to minimize unnecessary work during renders.

React.memo prevents functional components from re-rendering when props haven't changed. It's similar to PureComponent for class components but works with functional components and hooks.

useMemo and useCallback hooks prevent expensive calculations and function recreations on every render. Use them judiciously for expensive operations or when passing functions to child components.

Code splitting with React.lazy and Suspense enables loading components on-demand. This reduces initial bundle size and improves time-to-interactive for large applications.

Virtualization with libraries like react-window renders only visible items in large lists. This technique is essential for handling thousands of items without performance degradation.

Proper key props in lists help React identify which items have changed, been added, or removed. Using stable, unique keys prevents unnecessary re-renders and maintains component state.

Profiling with React DevTools Profiler helps identify performance bottlenecks. The flame graph shows component render times and helps focus optimization efforts.

State structure optimization involves keeping state flat, collocating related state, and avoiding state that can be derived from other state. This reduces unnecessary renders and simplifies components.`,
        category: "Technology",
        tags: ["React", "Performance", "Optimization", "Frontend"]
    },
    {
        title: "Java 17 Features and Modern Development Practices",
        content: `Java 17, the latest LTS release, introduces several features that improve developer productivity and application performance while maintaining backward compatibility.

Sealed classes and interfaces provide controlled inheritance hierarchies. They allow specifying which classes can extend or implement them, improving code clarity and enabling pattern matching optimizations.

Pattern matching for switch expressions (preview) makes code more expressive. Combined with sealed classes, it enables exhaustive pattern matching that's both type-safe and performant.

Text blocks simplify multi-line string handling, particularly useful for SQL queries, JSON, and HTML templates. They preserve formatting while eliminating escape sequence clutter.

Records provide concise syntax for data-carrying classes. They automatically generate constructors, accessors, equals, hashCode, and toString methods, reducing boilerplate code significantly.

Local-variable type inference (var keyword) improves code readability by reducing verbosity without sacrificing type safety. The compiler infers types from the initialization expression.

HTTP Client API (standardized in Java 11) provides modern HTTP/2 support with both synchronous and asynchronous programming models. It's a robust alternative to third-party HTTP libraries.

Garbage collector improvements in Java 17 include better G1GC performance and the production-ready ZGC for applications requiring low-latency garbage collection.

Modern Java development emphasizes functional programming, immutability, and reactive patterns that align with current software development trends.`,
        category: "Technology",
        tags: ["Java", "Java 17", "Modern Java", "Language Features"]
    },
    {
        title: "Advanced React Patterns: Compound Components and Render Props",
        content: `Advanced React patterns solve complex component design challenges by providing flexible and reusable solutions for component composition and state sharing.

Compound Components pattern allows multiple components to work together as a unit while maintaining their individual responsibilities. Think of how HTML select and option elements work together.

The pattern uses React.Children utilities and context to share state between parent and child components implicitly. This creates intuitive APIs where components can be composed flexibly.

Render Props pattern provides a way to share stateful logic between components using a prop whose value is a function. The component calls this function with its state as arguments.

This pattern enables maximum flexibility in rendering while keeping logic reusable. Components can share behavior without dictating how that behavior should be rendered.

Higher-Order Components (HOCs) wrap components to add additional functionality. While less common with hooks, they're still useful for cross-cutting concerns like authentication or theming.

Custom hooks combine the benefits of render props and HOCs with a simpler API. They enable stateful logic sharing without component wrapper nesting or render prop complexity.

Provider pattern with React Context enables sharing state across component trees without prop drilling. It's particularly useful for themes, authentication state, and application-wide data.

These patterns require careful consideration of performance implications. Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders in complex component hierarchies.`,
        category: "Technology",
        tags: ["React", "Advanced Patterns", "Component Design", "Architecture"]
    },
    {
        title: "Spring Boot Testing Strategies: Unit, Integration, and End-to-End",
        content: `Comprehensive testing strategies in Spring Boot applications ensure reliability and maintainability through different levels of testing, each serving specific purposes.

Unit testing with JUnit 5 and Mockito focuses on testing individual components in isolation. @ExtendWith(MockitoExtension.class) enables easy mocking of dependencies for pure unit tests.

@WebMvcTest annotation loads only the web layer for testing controllers. It provides MockMvc for simulating HTTP requests and responses without starting a full application context.

@DataJpaTest focuses on JPA repository testing with an embedded database. It configures only JPA-related components and provides TestEntityManager for test data setup.

@SpringBootTest loads the complete application context for integration testing. Use it sparingly as it's slower but provides the most realistic testing environment.

TestContainers enable integration testing with real databases and external services. They provide lightweight, throwaway instances of common services running in Docker containers.

@MockBean replaces beans in the application context with mocks, enabling testing of service layers with mocked dependencies while maintaining Spring's dependency injection.

Test slices (@WebMvcTest, @DataJpaTest, @JsonTest) load only relevant parts of the application context, making tests faster and more focused on specific layers.

End-to-end testing with tools like Selenium or Testcontainers tests the complete application flow from user interface to database, ensuring all components work together correctly.`,
        category: "Technology",
        tags: ["Spring Boot", "Testing", "JUnit", "Integration Testing"]
    },
    {
        title: "JavaScript Module Systems: CommonJS vs ES Modules",
        content: `JavaScript module systems have evolved from early script concatenation to sophisticated dependency management solutions. Understanding different module systems is crucial for modern development.

CommonJS, used in Node.js, employs require() for imports and module.exports for exports. It loads modules synchronously, which works well for server-side development where files are available locally.

ES Modules (ESM) provide standardized module syntax with import and export statements. They support static analysis, tree shaking, and asynchronous loading, making them ideal for browser environments.

Named exports allow exporting multiple values from a module, while default exports provide a single primary export. Combining both approaches offers flexibility in module design.

Dynamic imports enable code splitting and conditional loading of modules. The import() function returns a promise, allowing asynchronous module loading based on application needs.

Module resolution algorithms differ between systems. Node.js follows specific rules for finding modules, while bundlers like Webpack provide additional resolution strategies.

Interoperability between module systems requires careful consideration. Tools like Babel can transform ES modules to CommonJS, while Node.js provides experimental ESM support.

Best practices include using named exports for utility functions, default exports for main functionality, avoiding deep import paths, and designing modules with clear, focused responsibilities.

Build tools handle module bundling, transformation, and optimization. Understanding how bundlers work helps optimize application performance and reduce bundle sizes.`,
        category: "Technology",
        tags: ["JavaScript", "Modules", "Node.js", "Build Tools"]
    },
    {
        title: "Database Design Patterns with Spring Data JPA",
        content: `Effective database design with Spring Data JPA requires understanding both relational database principles and JPA mapping strategies for optimal performance and maintainability.

Entity relationships should reflect business logic while considering query patterns. @OneToMany relationships with proper fetch strategies prevent N+1 query problems common in ORM frameworks.

Cascading operations with cascade types (PERSIST, MERGE, REMOVE) automate related entity management. Use them carefully as inappropriate cascading can lead to unintended data modifications.

Lazy vs Eager loading strategies significantly impact performance. Default to LAZY loading and use JOIN FETCH queries or @EntityGraph when eager loading is necessary for specific use cases.

Custom repository implementations extend Spring Data JPA repositories with complex queries and business logic. Use @Query annotations for JPQL or native SQL when repository methods aren't sufficient.

Optimistic locking with @Version prevents concurrent modification issues. It's preferable to pessimistic locking in most scenarios as it doesn't hold database locks.

Database migrations with Flyway or Liquibase ensure schema consistency across environments. Version-controlled migrations enable safe database evolution in production systems.

Query optimization involves understanding execution plans, proper indexing, and query structure. Spring Boot's logging can reveal slow queries and N+1 query problems.

Audit trails with @CreatedDate, @LastModifiedDate, and @EntityListeners provide automatic tracking of entity changes, essential for compliance and debugging.`,
        category: "Technology",
        tags: ["Spring Data JPA", "Database", "ORM", "Performance"]
    },
    {
        title: "Asynchronous JavaScript: Promises, Async/Await, and Error Handling",
        content: `Asynchronous programming in JavaScript has evolved from callbacks to promises to async/await syntax, each iteration improving code readability and error handling.

Promises represent eventual completion or failure of asynchronous operations. They provide then(), catch(), and finally() methods for handling success, failure, and cleanup scenarios.

Promise chaining allows sequential async operations while maintaining flat code structure. Each then() returns a new promise, enabling complex async workflows without callback nesting.

Promise.all() executes multiple promises concurrently and waits for all to complete. Promise.allSettled() waits for all promises regardless of their outcome, useful for batch operations.

Async/await syntax makes asynchronous code look synchronous, improving readability and debugging. Functions marked with async always return promises, while await pauses execution until promises resolve.

Error handling with async/await uses try/catch blocks, providing familiar error handling patterns. This is often more intuitive than promise chains with catch() methods.

Parallel vs sequential execution impacts performance significantly. Use Promise.all() for independent operations and await for dependent operations that must happen in order.

Race conditions can occur with concurrent async operations. Proper state management and cancellation strategies prevent issues when component unmounts or user actions change.

Modern error handling includes proper error types, meaningful error messages, and graceful degradation strategies that maintain user experience when async operations fail.`,
        category: "Technology",
        tags: ["JavaScript", "Async Programming", "Promises", "Error Handling"]
    },
    {
        title: "Securing React Applications: Authentication and Authorization",
        content: `Security in React applications involves protecting routes, managing user sessions, and implementing proper authentication and authorization patterns that work with modern backend APIs.

JWT (JSON Web Tokens) provide stateless authentication for SPAs. Store tokens securely, implement proper expiration handling, and use refresh tokens for long-lived sessions.

Protected routes with React Router require authentication checks before rendering components. Higher-order components or custom route components can encapsulate this logic cleanly.

Role-based access control (RBAC) manages what authenticated users can access. Implement authorization checks at both component and API levels for comprehensive security.

Secure token storage is crucial for security. HttpOnly cookies are more secure than localStorage, but localStorage offers more flexibility for SPA development patterns.

CSRF protection involves validating request origins and using anti-CSRF tokens. SameSite cookie attributes provide additional protection against cross-site request forgery.

Input validation and sanitization prevent XSS attacks. Never trust user input, use parameterized queries on backends, and sanitize displayed content appropriately.

HTTPS enforcement ensures encrypted communication. Modern browsers provide security features like HSTS and CSP that enhance application security when properly configured.

Security headers like X-Frame-Options, X-Content-Type-Options, and Content-Security-Policy provide additional protection layers against common web vulnerabilities.`,
        category: "Technology",
        tags: ["React", "Security", "Authentication", "Web Security"]
    }
];

// Function to add posts to localStorage
function addSamplePosts() {
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const currentIds = new Set(existingPosts.map(post => post.id));
    
    const postsToAdd = samplePosts.map((post, index) => {
        const timestamp = Date.now() - (index * 3600000); // Spread posts over hours
        return {
            id: timestamp,
            title: post.title,
            content: post.content,
            category: post.category,
            tags: post.tags,
            date: new Date(timestamp).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            timestamp: timestamp,
            wordCount: post.content.split(/\s+/).length,
            readingTime: Math.ceil(post.content.split(/\s+/).length / 200) || 1
        };
    }).filter(post => !currentIds.has(post.id));
    
    const allPosts = [...existingPosts, ...postsToAdd];
    allPosts.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    
    localStorage.setItem('blogPosts', JSON.stringify(allPosts));
    return postsToAdd.length;
}

// Execute the function
const addedCount = addSamplePosts();
console.log(`Added ${addedCount} sample posts to the blog!`);

// Reload the page to see the new posts
if (typeof window !== 'undefined') {
    window.location.reload();
}