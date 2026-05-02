# Vehicle Maintenance Scheduler System Design

## Architecture

Client → API Layer → Scheduler Service → Logging Middleware

## Core Modules

1. Depot Service
2. Vehicle Service
3. Optimization Engine
4. Logging Middleware

## Algorithm

Use 0/1 Knapsack Dynamic Programming:

- Weight = Duration
- Value = Impact
- Capacity = MechanicHours

Goal:
Maximize total impact under mechanic-hour constraints.

## APIs Used

GET /depots  
GET /vehicles  

## Logging

All API events, failures, and processing states are logged using custom middleware.

## Scalability

- Horizontal scaling
- Redis caching
- Queue-based processing