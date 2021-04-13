import Layout from "./Layout/Layout";
import "antd/dist/antd.css";
import styles from "./App.module.scss";
import { ProjectsProvider } from "./context/projects-context";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ProjectsProvider>
        <div className={styles.container}>
          <Layout />
        </div>
      </ProjectsProvider>
    </Router>
  );
}

export default App;
