# 🗂️ Epic: Job Tracker - Solo Dev Edition

## 👨‍🔧 Setup & Foundation

### ✅ JT-001: Create Solution with Clean Architecture

Type: Task
Priority: High
Description:
Initialize a Blazor United (WASM + Server) solution using Clean Architecture principles. Structure with multiple projects:

JobTracker.Domain

JobTracker.Application

JobTracker.Infrastructure

JobTracker.Web (Blazor Frontend)

Acceptance Criteria:

Solution compiles

Projects reference each other appropriately

Uses .NET 8

SQLite + EF Core Code-First setup done

✅ JT-002: Setup EF Core and Initial Migration
Type: Task
Priority: High
Description:

Install EF Core packages

Setup DbContext in Infrastructure

Create initial Job entity

Scaffold migration and update SQLite DB

Acceptance Criteria:

One table exists in DB

Application boots without error

✅ JT-003: Implement Global Error Handling & Logging
Type: Task
Priority: Medium
Description:

Add centralized error handling middleware

Use ILogger abstraction

Setup global try/catch around Program.cs pipeline

Add logging to file (Serilog or built-in)

📦 Domain & Business Logic
⏳ JT-010: Design Domain Models
Type: Story
Priority: High
Description:
Create core models for tracking job applications:

JobApplication

Company

Contact

FollowUpLog
Include value objects (e.g., Email, Phone, Status as enum).

⏳ JT-011: Add Application Layer Commands & Queries
Type: Story
Priority: High
Description:
Implement CQRS pattern using MediatR for:

Creating job applications

Editing job applications

Viewing a list

Viewing details

Adding follow-ups

💻 UI & Frontend
⏳ JT-020: Create UI Wireframes in Figma (Optional)
Type: Task
Priority: Low
Description:
(Optional) Build quick wireframes for the following views:

Dashboard

Add/Edit Job

Job Detail

Contact List
Skip if you go straight into Bootstrap prototyping.

⏳ JT-021: Build Dashboard Page (Bootstrap)
Type: Task
Priority: High
Description:

Bootstrap layout

Table of job apps

Create and edit buttons

Use MudBlazor if preferred for snazzier UI

⏳ JT-022: Add Job Application Form
Type: Task
Priority: High
Description:

Basic form with validation

Status dropdown

File upload (resume, notes)

🔁 Optional Enhancements
💤 JT-030: Background Sync Job for LinkedIn or RSS Feed
Type: Spike
Priority: Low
Description:
Explore background job or hosted service that pulls jobs from an API like LinkedIn or another source to auto-log opportunities.

🧪 JT-040: Add Unit Tests for Application Layer
Type: Task
Priority: Medium
Description:
Set up xUnit test project for Application logic. Mock EF Core and MediatR where needed.

🛠️ JT-050: Add Export to CSV / Excel
Type: Task
Priority: Low
Description:
User should be able to export job history to a file.

You can expand each one with subtasks if needed, or even assign yourself due dates if you want that “project manager breathing down your neck” feeling 😎