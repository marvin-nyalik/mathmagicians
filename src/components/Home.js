import HomeCSS from './Home.module.css';

const home = () => (
  <div className={HomeCSS.cover}>
    <div className={HomeCSS.home}>
      <h2 className={HomeCSS.headline}>Welcome to Math-Magicians</h2>
      <div className={HomeCSS.description}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          ducimus fugit iste ea vel placeat nostrum magni incidunt molestias
          voluptates impedit corporis dignissimos eum facere nulla et! Eaque,
          saepe eveniet?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          ducimus reprehenderit repellat nulla fugit ea a recusandae aspernatur
          quibusdam molestiae consequuntur voluptate esse ex quasi velit, illo
          tenetur ad dolor accusamus nam necessitatibus commodi. Fugiat magnam
          tempore itaque ullam sed.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem
          magni deserunt architecto magnam praesentium.
        </p>
      </div>
    </div>
  </div>
);

export default home;
