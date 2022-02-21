const Loading = () => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value="50"></progress>
    </div>
  </aside>
);

export { Loading };
