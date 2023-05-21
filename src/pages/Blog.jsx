import React from "react";

const Blog = () => {
  return (
    <>
      <section class="py-16">
        <div class="container mx-auto px-5 sm:px-20">
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <div class="p-6">
              <h2 class="text-2xl font-bold">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h2>
              <p class="mt-2 text-gray-600">
                An access token is a credential that is used to access protected
                resources on a server. It typically contains information about
                the user and their permissions. Access tokens are usually
                short-lived and have an expiration time. When a client makes a
                request to a server, it includes the access token in the request
                headers to prove its identity and gain access to the requested
                resources. <br />
                A refresh token, on the other hand, is a long-lived token that
                is used to obtain a new access token when the current one
                expires. It is usually issued alongside the access token during
                the authentication process. When the access token expires, the
                client can send the refresh token to the server to obtain a new
                access token without requiring the user to log in again. <br />
                On the client-side, access tokens and refresh tokens should be
                stored securely. Storing them in browser cookies or local
                storage can expose them to security risks like cross-site
                scripting (XSS) attacks. It is recommended to store them in
                secure HTTP-only cookies, which are inaccessible to JavaScript,
                or in the browser's token storage mechanisms such as the
                browser's session storage or IndexedDB.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <div class="p-6">
              <h2 class="text-2xl font-bold">
                What is express js? What is Nest JS?
              </h2>
              <p class="mt-2 text-gray-600">
                Express.js is a popular web application framework for Node.js.
                It provides a simple and flexible way to build web applications
                and APIs. Express.js allows you to handle routes, handle HTTP
                requests and responses, and manage middleware for handling
                various functionalities such as authentication, logging, and
                error handling. It is known for its minimalist approach,
                allowing developers to focus on building the application's logic
                rather than dealing with boilerplate code. <br />
                NestJS is a progressive Node.js framework for building
                efficient, scalable, and maintainable server-side applications.
                It is built on top of Express.js and enhances it with additional
                features and architectural patterns inspired by Angular. NestJS
                follows the principle of modular development and provides a
                robust dependency injection system, powerful routing
                capabilities, and a structured architecture that promotes code
                reusability and maintainability. It is often used to build
                enterprise-level applications and APIs
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <div class="p-6">
              <h2 class="text-2xl font-bold">
                Compare SQL and NoSQL databases?
              </h2>
              <p class="mt-2 text-gray-600">
                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
                different types of databases. <br />
                SQL databases are relational databases that use structured data
                and adhere to a fixed schema. They store data in tables with
                predefined columns and relationships between tables. SQL
                databases are ideal for applications with complex relationships
                and require strict consistency, integrity, and ACID (Atomicity,
                Consistency, Isolation, Durability) properties. <br />
                NoSQL databases, on the other hand, are non-relational databases
                that can handle unstructured, semi-structured, and structured
                data. They provide flexibility in terms of schema and allow for
                horizontal scaling. NoSQL databases are suitable for
                applications that require high scalability, fast read/write
                operations, and flexible data models.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <div class="p-6">
              <h2 class="text-2xl font-bold">What is MongoDB aggregate and how does it work?</h2>
              <p class="mt-2 text-gray-600">
                MongoDB aggregate is a powerful data aggregation framework
                provided by MongoDB, a popular NoSQL database. It allows you to
                perform advanced data aggregation operations, such as grouping,
                filtering, sorting, joining, and computing statistical results
                on the data stored in MongoDB collections. The aggregate
                framework uses a pipeline-based approach, where you can chain
                multiple stages together to define a sequence of operations to
                be applied to the data. Each stage in the pipeline processes the
                input data and passes the result to the next stage. This allows
                for complex data transformations and analysis in a flexible and
                efficient manner, making it easier to retrieve and process data
                in meaningful ways from MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
