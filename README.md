# 📊 Bind Snowflake Database to a Syncfusion Pivot Table

> Quick-start samples demonstrating how to retrieve data from a Snowflake database via an ASP.NET Web API and display it using Syncfusion EJ2 PivotView (Pivot Table) across TypeScript, JavaScript, Angular, React, Vue, ASP.NET Core, MVC and Blazor.

---

## 📚 Table of Contents

- [🔍 Project Overview](#-project-overview)
- [🚀 Quick Start](#-quick-start)
- [✨ Key Features](#-key-features)
- [🛠️ Supported Platforms & Dependencies](#️-supported-platforms--dependencies)
- [🧭 Project Structure](#-project-structure)
- [🧩 Minimal Example (Snowflake API + PivotView)](#-minimal-example-snowflake-api--pivotview)
- [⚙️ Configuration & Environment](#️-configuration--environment)
- [🧪 Testing & CI](#-testing--ci)
- [🤝 Contributing](#-contributing)
- [📜 License & Support](#-license--support)

---

## 🔍 Project Overview

This repository demonstrates how to connect to a Snowflake data warehouse from an ASP.NET Web API (`MyWebService`) and surface query results to client applications using Syncfusion EJ2 PivotView controls. It includes multi-framework client samples for quick prototyping and evaluation.

Use cases:
- Enterprise analytics and BI dashboards
- Sales/finance multidimensional reporting
- Rapid prototyping of PivotView integrations against Snowflake

---

## 🚀 Quick Start

Prerequisites
- .NET 6 SDK (or later)
- Snowflake account and connection credentials (account, username, password, role, warehouse, database, schema)
- Optional: Node.js (for front-end samples)

Run the Web API (`MyWebService`)

```bash
cd MyWebService
dotnet restore
dotnet run
# API runs on the configured port (see Properties/launchSettings.json)
```

Run a front-end sample (choose one):

TypeScript
```bash
cd Typescript/pivot-table
npm install
npm start
```

Angular
```bash
cd Angular/pivot-table
npm install
npm start
```

React
```bash
cd React/pivot-table
npm install
npm start
```

Vue
```bash
cd VUE/pivot-table
npm install
npm run dev
```

First success: Open the front-end sample URL (e.g., http://localhost:3000 or http://localhost:4200) and confirm the PivotView loads rows from the running Web API.

---

## ✨ Key Features

- Snowflake ADO.NET integration (`Snowflake.Data`) in `MyWebService` ✅
- Multi-framework client samples: TypeScript, JavaScript, Angular, React, Vue, Blazor, MVC ✅
- Copy-paste-ready patterns for server → client binding to Syncfusion PivotView ✅
- Swagger/OpenAPI support (via `Swashbuckle.AspNetCore`) for API exploration ✅

Why this helps:
- Connects enterprise Snowflake datasets to interactive pivot reporting quickly.
- Reusable patterns across modern front-end frameworks.

---

## 🛠️ Supported Platforms & Dependencies

- Languages: C# (.NET 6 Web API), JavaScript/TypeScript (clients)
- Server (MyWebService/MyWebService.csproj):
	- `Snowflake.Data` 4.4.1 — Snowflake ADO.NET provider
	- `Newtonsoft.Json` 13.0.3
	- `Swashbuckle.AspNetCore` 6.2.3
- Client: `@syncfusion/ej2` umbrella or per-framework packages (e.g., `@syncfusion/ej2-react-pivotview` 32.x)
- System requirements: .NET 6 SDK, Snowflake account, Node.js for front-end builds

---

## 🧭 Project Structure (high level)

- `MyWebService/` — ASP.NET Core Web API that queries Snowflake and returns JSON
- `Typescript/`, `Javascript/`, `Angular/`, `React/`, `VUE/` — front-end samples using Syncfusion PivotView
- `Core/`, `MVC/`, `Blazor/` — server/UI samples for .NET platforms

Entry points:
- API controller: `MyWebService/Controllers/PivotController.cs` (or similar)
- Client mount: `Typescript/pivot-table/src/index.html` or framework equivalents

---

## 🧩 Minimal Example (Snowflake API + PivotView)

Server: basic Snowflake query (C#)

```csharp
using Snowflake.Data.Client;

public IEnumerable<object> GetPivotData()
{
		var connStr = "account=ACCOUNT;user=USER;password=PWD;db=DB;schema=SCHEMA;role=ROLE;warehouse=WH";
		using var conn = new SnowflakeDbConnection();
		conn.ConnectionString = connStr;
		conn.Open();
		using var cmd = conn.CreateCommand();
		cmd.CommandText = "SELECT Country, Product, Amount FROM SALES_SAMPLE";
		using var reader = cmd.ExecuteReader();
		var rows = new List<object>();
		while (reader.Read()) { rows.Add(new { Country = reader[0], Product = reader[1], Amount = reader[2] }); }
		return rows;
}
```

Client: bind PivotView (vanilla JS)

```js
fetch('/api/pivotdata')
	.then(r => r.json())
	.then(data => {
		var pivot = new ej.pivotview.PivotView({
			dataSourceSettings: { dataSource: data, rows:[{name:'Country'}], columns:[{name:'Product'}], values:[{name:'Amount'}] },
			showFieldList: true,
			height: 400
		});
		pivot.appendTo('#PivotTable');
	});
```

---

## ⚙️ Configuration & Environment

- Snowflake connection: store credentials securely (environment variables or secret manager). Example connection string format:

```text
account=<account>;user=<user>;password=<password>;db=<database>;schema=<schema>;role=<role>;warehouse=<warehouse>
```

- Configure `appsettings.json` or `User Secrets` to supply the connection string to `MyWebService`.
- CORS: enable for local front-end origins in `Program.cs`.

Troubleshooting:
- Verify Snowflake user/role permissions for the queried tables.
- Confirm network access to Snowflake (private connectivity / public internet). Use `Snowflake.Data` logs to debug.

---

## 🧪 Testing & CI

- Add GitHub Actions to build the Web API and optionally run front-end builds per sample. Suggested jobs:
	- `dotnet restore` / `dotnet build` / `dotnet test`
	- `npm ci` / `npm run build` for front-end samples

---

## 🤝 Contributing

Contributions welcome. Suggested workflow:
1. Fork and create a branch `feature/<desc>`
2. Run the Web API locally and test sample clients
3. Open a PR with description, screenshots, and testing steps

## 📜 License & Support

This is a **commercial product** subject to the Syncfusion End User License Agreement (EULA).

**Free Community License** is available for qualifying users/organizations:  
- Annual gross revenue < $1 million USD  
- 5 or fewer total developers  
- 10 or fewer total employees  

The community license allows free use in both internal and commercial applications under these conditions.  
No registration or approval is required — just comply with the terms.

**Paid Licenses** are required for:  
- Larger organizations  
- Teams exceeding the community license limits  
- Priority support, custom patches, or on-premise deployment options  

Purchase options and pricing: https://www.syncfusion.com/sales/products  
30-day free trial (full features, no credit card required): https://www.syncfusion.com/downloads/essential-js2  
Community License details & FAQ: https://www.syncfusion.com/products/communitylicense  
Full EULA: https://www.syncfusion.com/eula/es/

© 2026 Syncfusion, Inc. All Rights Reserved.
