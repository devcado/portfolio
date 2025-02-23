import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var sectionName2 = this.props.resumeBasicInfo.section_name.skills2;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>

        <br />
        <br />

        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName2}</span>
            </h1>
          </div>
          <div className="col-md-12 mx-auto text-center">
            <a href="https://app.cado.dev.br/agil/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="card-body text-justify h3 ml-3 mr-3">
                  <img src="https://app.cado.dev.br/agil/sprint.jpg" alt="Agil na TI - DevCado"
                       style={{ maxWidth: "40px", maxHeight: "40px" }}/>
                  Ágil na TI - DevCado
                </div>
              </div>
            </a>
          </div>
          <br />
          <div className="col-md-12 mx-auto text-center">
            <a href="https://www.atlassian.com/br/agile/project-management" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="card-body text-justify h3 ml-3 mr-3">
                  <img src="https://app.cado.dev.br/agil/strategy.jpg" alt="Gestão ágil de projetos - Atlassian"
                       style={{ maxWidth: "40px", maxHeight: "40px" }}/>
                  Gestão ágil de projetos - Atlassian
                </div>
              </div>
            </a>
          </div>
          <br />
          <div className="col-md-12 mx-auto text-center">
            <a href="https://www.baeldung.com/java-clean-code" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="card-body text-justify h3 ml-3 mr-3">
                  <img src="https://app.cado.dev.br/agil/baeldung.jpg" alt="Clean Coding in Java - Baeldung"
                       style={{maxWidth: "40px", maxHeight: "40px"}}/>
                  Clean Coding in Java - Baeldung
                </div>
              </div>
            </a>
          </div>
          <br />
          <div className="col-md-12 mx-auto text-center">
            <a href="https://www.baeldung.com/java-maven-spotless-plugin" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="card-body text-justify h3 ml-3 mr-3">
                  <img src="https://app.cado.dev.br/agil/baeldung.jpg" alt="Maven Spotless Plugin - Baeldung"
                       style={{maxWidth: "40px", maxHeight: "40px"}}/>
                  Maven Spotless Plugin - Baeldung
                </div>
              </div>
            </a>
          </div>
          <br />
          <div className="col-md-12 mx-auto text-center">
            <a href="https://www.baeldung.com/docker-test-containers" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="card-body text-justify h3 ml-3 mr-3">
                  <img src="https://app.cado.dev.br/agil/baeldung.jpg" alt="Docker Test Containers - Baeldung"
                       style={{maxWidth: "40px", maxHeight: "40px"}}/>
                  Docker Test Containers - Baeldung
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
