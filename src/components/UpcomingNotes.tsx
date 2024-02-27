"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingNotes() {
  const notes = [
    {
        title: "Scalability",
        description: "Learn about designing systems that can handle increased loads smoothly.",
        link: "https://lnkd.in/gx-sPXZm"
    },
    {
        title: "Horizontal vs Vertical Scaling",
        description: "Understand the differences between horizontal and vertical scaling and when to use each approach.",
        link: "https://lnkd.in/gAH2e9du"
    },
    {
        title: "Latency vs Throughput",
        description: "Explore the concepts of latency and throughput in system design and optimization.",
        link: "https://lnkd.in/g_amhAtN"
    },
    {
        title: "Load Balancing",
        description: "Discover strategies for distributing incoming network traffic across multiple servers.",
        link: "https://lnkd.in/gQaa8sXK"
    },
    {
        title: "Caching",
        description: "Learn how caching can improve system performance by storing frequently accessed data.",
        link: "https://lnkd.in/gC9piQbJ"
    },
    {
        title: "ACID Transactions",
        description: "Understand the properties of ACID transactions and their importance in database systems.",
        link: "https://lnkd.in/gMe2JqaF"
    },
    {
        title: "SQL vs NoSQL",
        description: "Compare the characteristics and use cases of SQL and NoSQL databases.",
        link: "https://lnkd.in/g3WC_yxn"
    },
    {
        title: "Database Indexes",
        description: "Learn how database indexes improve query performance by providing faster data retrieval.",
        link: "https://lnkd.in/gCeshYVt"
    },
    {
        title: "Database Sharding",
        description: "Explore database sharding as a technique for horizontally partitioning data across multiple servers.",
        link: "https://lnkd.in/gMqqc6x9"
    },
    {
        title: "Content Delivery Network (CDN)",
        description: "Discover how CDNs improve website performance by caching content closer to users.",
        link: "https://lnkd.in/gjJrEJeH"
    },
    {
        title: "Strong vs Eventual Consistency",
        description: "Understand the differences between strong and eventual consistency in distributed systems.",
        link: "https://lnkd.in/gJ-uXQXZ"
    },
    {
        title: "Batch Processing vs Stream Processing",
        description: "Learn about batch processing and stream processing, and their applications in data processing.",
        link: "https://lnkd.in/g4_MzM4s"
    },
    {
        title: "Concurrency vs Parallelism",
        description: "Explore the concepts of concurrency and parallelism in the context of concurrent programming.",
        link: "https://lnkd.in/gSKUm2Nh"
    },
    {
        title: "Synchronous vs. Asynchronous Communications",
        description: "Understand the differences between synchronous and asynchronous communication patterns in distributed systems.",
        link: "https://lnkd.in/gC3F2nvr"
    },
    {
        title: "Rest vs RPC",
        description: "Compare RESTful and RPC-style communication protocols and their use in web services.",
        link: "https://lnkd.in/gN__zcAB"
    },
    {
        title: "CAP Theorem",
        description: "Learn about the CAP theorem and its implications for distributed systems.",
        link: "https://lnkd.in/g3hmVamx"
    },
    {
        title: "Reverse Proxy",
        description: "Explore the role of reverse proxies in load balancing, security, and web acceleration.",
        link: "https://lnkd.in/gFwWFDu8"
    },
    {
        title: "Domain Name System (DNS)",
        description: "Understand how DNS works and its role in translating domain names to IP addresses.",
        link: "https://lnkd.in/gkMcZW8V"
    },
    {
        title: "Rate Limiting",
        description: "Learn about rate limiting techniques to prevent abuse and ensure fair resource allocation.",
        link: "https://lnkd.in/gWsTDR3m"
    },
    {
        title: "Redundancy and Replication",
        description: "Explore redundancy and replication strategies to improve fault tolerance and reliability in distributed systems.",
        link: "https://lnkd.in/gvwQGEiP"
    },
    {
        title: "Fault Tolerance",
        description: "Understand techniques for building fault-tolerant systems that can continue operating in the presence of failures.",
        link: "https://lnkd.in/dVJ6n3wA"
    },
    {
        title: "Failover",
        description: "Learn about failover mechanisms that enable seamless recovery in the event of system failures.",
        link: "https://lnkd.in/dihZ-cEG"
    },
    {
        title: "WebSockets",
        description: "Discover how WebSockets enable bidirectional communication between clients and servers over a single, long-lived connection.",
        link: "https://lnkd.in/g76Gv2KQ"
    },
    {
        title: "Microservices Architecture",
        description: "Explore the microservices architectural style and its benefits in building scalable, maintainable software systems.",
        link: "https://lnkd.in/gFXUrz_T"
    },
    {
        title: "API Design",
        description: "Learn best practices for designing APIs that are easy to use, maintain, and evolve.",
        link: "https://lnkd.in/ghYzrr8q"
    }
];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Start Reading
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Fundamental Grip
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={notes.map((note) => ({
              title: note.title,
              description: note.description,
              link: note.link,
            }))}
          />
        </div>
        
      </div>
    </div>
  );
}

export default UpcomingNotes;
