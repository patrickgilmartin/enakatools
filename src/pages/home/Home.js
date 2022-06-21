const Home = ({ user }) => {
  return (
    <div className="mb-5">
      <div className="p-5 mb-4 bg-light rounded-3" id="hero">
        <div className="container-fluid text-center py-5">
          <h1 className="display-1 fw-bold">Enaka Tools</h1>
          <h2>for EVE Online</h2>
          <p className="col-md-12 fs-4">
            This site is designed to help EVE Online players with functions that delve deeper into game mechanics. Use the navigation links or the buttons below to find your way around and enjoy.
          </p>
          <button className="btn btn-primary btn-lg" type="button">Industry</button>
        </div>
      </div>
      <div className="container py-5" >
        <h1 className="display-5 fw-bold">Enaka Tools for EVE Online</h1>
        <p className="col-md-12 fs-4">
          <img id="jumbo-logo" src="/assets/images/EnakaEnterprisesLight.png" alt="logo"></img>
          After looking through the various sites that offer information and tools, I couldn't find anything that fit my needs. This site is made to use CCP's ESI OpenAPI to integrate EVE's Single Sign On (SSO) and pull information directly from EVE itself. The site can be used without signing in, though the option is there for more detailed management.</p>
        <p className="col-md-12 fs-4">The goal for this site was to not only provide good tools that are helpful and straight forward, but also a site that looks the part. Too often sites seem thrown together with little thought or care and I wanted something more. Something that you feel could be part of the game and helpful as well. </p>
        <p className="col-md-12 fs-4">I eventually want to include a forum so people can provide feedback or just discuss game related things. Be patient and keep your eyes on the site as it will evolve over the next few months. I may not have everything right in stats or figures, so please, if you notice an error in calculations please let me know through in game mail.</p>
      </div>
      <div className="container pb-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>About Me</h2>
              <p>I played EVE Online first in 2010 after leaving another MMO, and immidiately gravitated to the industrial path and never looked back. I had to leave the game a few years later for some time, and unfortunately I do not have my accounts anymore. I restarted playing and again got back into industrial gameplay. I play under my new character <a href="https://evewho.com/character/2119942140" alt="character" target="_blank" rel="noopener noreferrer">Nala Enaka</a> and I have to say I still enjoy EVE Online as much as I did back then.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light text-dark border rounded-3">
              <h2>Corporation/Alliance Shout Out</h2>
              <p>
                <img id="eve-logo" src="/assets/images/firelogo.png" alt="Fire Stunner's corp logo"></img>

                Wanted to give mention to Fire Stunner's Corporation. I am a proud member and looking for to more with them. They are a good group of people that I am glad to be a part of.
              </p>
              <p>
                <img id="eve-logo" src="/assets/images/houseraidinglogo.png" alt="House Raiding Comms alliance logo"></img>
                House Raiding Comms is the alliance we are apart of and I wanted to make sure to give them a mention as well. They are a good compliment to the kind of people in our corporation and together they all make it a much more enjoyable game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;