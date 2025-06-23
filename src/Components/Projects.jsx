import React, { useEffect, useState } from "react";
import "./Projects.css";

const GITHUB_USERNAME = "Miilan13"; // ← Change this to your GitHub username

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .filter((repo) => !repo.fork) // exclude forked repos
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects-section py-5">
      <div className="container">
        {loading ? (
          <p className="text-center text-light">Loading projects...</p>
        ) : repos.length === 0 ? (
          <p className="text-center text-light">No public repositories found.</p>
        ) : (
          <div className="row">
            {repos.map((repo) => (
              <div key={repo.id} className="col-md-6 col-lg-4 mb-4">
                <div className="project-card">
                  <h5 className="text-primary">{repo.name}</h5>
                  <p className="text-light small">
                    {repo.description ? repo.description : "No description provided."}
                  </p>
                  {repo.language && (
                    <p className="text-white-50 mb-1">Language: {repo.language}</p>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm mt-2"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
