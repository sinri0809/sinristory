const DashboardDiagram = () => {
  return (
    <div className="profile-diagram">
      <div data-depth={0} className="tree-0-uxe tree-diagram">
        <span>UX Engineer</span>
      </div>

      <div
        data-depth={1}
        id="diagram-1-develop"
        className="tree-1-dev tree-diagram"
      >
        <span>Develop</span>
      </div>
      <div data-depth={1} className="tree-1-des tree-diagram">
        <span>Design</span>
      </div>
      <div data-depth={1} className="tree-1-hmi tree-diagram">
        <span>HMI</span>
      </div>
      <div data-depth={1} className="tree-1-ds tree-diagram">
        <span>
          Design
          <br />
          System
        </span>
      </div>
      {/* <div className="tree-1-uxi tree-diagram">
      <span>Improving</span>
    </div> */}
      <div
        data-depth={2}
        aria-describedby=""
        className="tree-2-ele tree-diagram"
      >
        <span>Electronics</span>
      </div>
      <div data-depth={2} className="tree-2-db tree-diagram">
        <span>DB</span>
      </div>
      <div data-depth={2} className="tree-2-htm tree-diagram">
        <span>HTML</span>
      </div>
      <div data-depth={2} className="tree-2-css tree-diagram">
        <span>CSS</span>
      </div>
      <div data-depth={2} className="tree-2-js tree-diagram">
        <span>js</span>
      </div>
      <div data-depth={2} className="tree-2-react tree-diagram">
        <span>React</span>
      </div>
      <div data-depth={2} className="tree-2-ts tree-diagram">
        <span>typesciprt</span>
      </div>
      <div data-depth={2} className="tree-2-wbp tree-diagram">
        <span>webpack</span>
      </div>
      <div data-depth={2} className="tree-2-stb tree-diagram">
        <span>Storybook</span>
      </div>

      <div data-depth={2} className="tree-2-adobe tree-diagram">
        <span>Adobe</span>
      </div>
      <div data-depth={2} className="tree-2-figma tree-diagram">
        <span>Figma</span>
      </div>
      <div data-depth={2} className="tree-2-test tree-diagram">
        <span>test</span>
      </div>
    </div>
  );
};

export default DashboardDiagram;
