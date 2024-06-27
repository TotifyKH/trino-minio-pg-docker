import { useEffect } from "react"
import { embedDashboard } from "@superset-ui/embedded-sdk"
import "./App.css"

function App() {
  const getToken = async () => {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJGcm9udGVuZCBVc2VyIiwibGFzdF9uYW1lIjoiRnJvbnRlbmQgVXNlciIsInVzZXJuYW1lIjoiZnJvbnRlbmQtdXNlciJ9LCJyZXNvdXJjZXMiOlt7InR5cGUiOiJkYXNoYm9hcmQiLCJpZCI6ImVmMTY4ZTQ4LWM4MDYtNDdhYi1hNDNiLTZmZTQzZTZlNTE3ZCJ9XSwicmxzX3J1bGVzIjpbXSwiaWF0IjoxNzE5NDc2MDExLjMxODY3ODYsImV4cCI6MTcxOTQ3NjMxMS4zMTg2Nzg2LCJhdWQiOiJodHRwOi8vMC4wLjAuMDo4MDgwLyIsInR5cGUiOiJndWVzdCJ9.uH9chmrJyskXjI5_O41mQlN4VMAKq9sgIbrCw89nfr4"
  }

  useEffect(() => {
    const embed = async () => {
      await embedDashboard({
        id: "ef168e48-c806-47ab-a43b-6fe43e6e517d", // given by the Superset embedding UI
        supersetDomain: "http://localhost:8088",
        mountPoint: document.getElementById("dashboard"), // html element in which iframe render
        fetchGuestToken: () => getToken(),
        dashboardUiConfig: {
          hideTitle: true,
          hideChartControls: true,
          hideTab: true,
          filters: {
            visible: false,
            expanded: false
          }
        },
      })
    }
    if (document.getElementById("dashboard")) {
      embed()
    }
  }, [])

  return (
    <div className="App" width="100%" height="100%" >
      <h1>How to Embed Superset Dashboard into React</h1>
      <div id="dashboard" />
    </div>
  )
}

export default App