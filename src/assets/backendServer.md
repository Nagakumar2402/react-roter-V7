---

### ✅ Final Command:

```bash
npx json-server --watch data.json --port 3060
```

---

### 🔍 What it does:

- **`npx json-server`**: Runs the `json-server` package temporarily (without installing globally).
- **`--watch data.json`**: Watches the file `data.json` for changes and serves its content as a REST API.
- **`--port 3060`**: Runs the server on port 3060 (default is 3000).

---

### 📂 Example `data.json` file structure:

```json
{
  "jobs": [
    {
      "id": 1,
      "title": "Frontend Developer",
      "salary": "₹6,00,000",
      "location": "Bangalore"
    },
    {
      "id": 2,
      "title": "Backend Developer",
      "salary": "₹7,50,000",
      "location": "Hyderabad"
    }
    // ...more jobs
  ]
}
```

---

### 🌐 Access your API at:

- All jobs: `http://localhost:3060/jobs`
- Single job: `http://localhost:3060/jobs/1`
- Search: `http://localhost:3060/jobs?location=Hyderabad`

---

Let me know if you want to:

- Connect this API to your React app
- Add POST/PUT/DELETE functionality
- Automatically create `data.json` from a script
