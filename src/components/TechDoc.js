import React from 'react'
import './TechDoc.css'

function TechDoc() {
  return (
    <div id="parent">
  <nav id="navbar">
    <header id="nav-title">Unity 2D Features</header>
    <div id="link-div">
      <a href="#Introduction" className="nav-link">Introduction</a>
      <a href="#Sprites" className="nav-link">Sprites</a>
      <a href="#Sprite_Sheets" className="nav-link">Sprite Sheets</a>
      <a href="#Animations" className="nav-link">Animations</a>
      <a href="#Tilemaps" className="nav-link">Tilemaps</a>
      <a href="#Pixel_Perfect_Camera" className="nav-link">Pixel Perfect Camera</a>
      <a href="#Lights" className="nav-link">Lights</a>
    </div>
  </nav>
  <main id="main-doc">
    <header id="main-title">2D and Pixel Art Features in the Unity Engine</header>
    <section id="Introduction" className="main-section">
      <header>Introduction</header>
      <p>
        The Unity engine has long been used as a tool for video game development, primarily in the sphere of 3D games. However, what many do not know is that Unity also has many useful and robust tools specifically for making games in 2D.
      </p>
      <p>
        The intention of this technical guide is to put many of Unity’s 2D features on display, with an emphasis on features that relate to 8- or 16-bit games made with a pixel art aesthetic. For each of these features, the following is recommended:
      </p>
      <ul>
        <li>Unity version 2019 or higher</li>
        <li>Universal Render Pipeline (URP) version 7.1.8 or higher</li>
      </ul>
      <p>To achieve the latter, upon creating a new project, select the following, starting from the top toolbar:</p>
      <div className="code-div">
        <code>Window -{'>'} Project Manager -{'>'} Click “All” Tab -{'>'} Select “Universal RP” package -{'>'} Install</code>
      </div>
    </section>
    <section id="Sprites" className="main-section">
      <header>Sprites</header>
      <p>Sprites are the fundamental art assets for any 2D game. For any project, it is recommended that developers create a distinct “Sprites” folder in their Assets for better organization. Sprites may be drawn in a separate software (Aseprite, GIMP, Photoshop, etc.) or downloaded from an asset website. Regardless, after making sure all sprite files are saved in the appropriate format (.jpg or.png, preferably), they may be dragged into the Sprites folder.</p>
      <p>
        Upon importing the sprite(s), they may be added to the Scene. For pixel art in particular, the default import settings will cause the sprite to either appear blurry or in the wrong resolution. To fix this, head to the Inspector and change the Filter Mode setting to “Point (no filter)”. Also, change the Compression to “None”. Finally, to size the image appropriately, set the Pixels Per Unit to the unit size of each sprite in the project. For example, if each sprite is built using multiples of a 32x32 canvas (ex. 64x32, 96x96, 128x32, etc.), the Pixels Per Unit would be set to 32.
      </p>
    </section>
    <section id="Sprite_Sheets" className="main-section">
      <header>Sprite Sheets</header>
      <p>
        While sprites may each be loaded individually, Unity also has features for loading files with multiple images, called sprite sheets. These files should be imported using the method above for sprites; however, in order to be able to separate each image within the file, the “Sprite Mode” setting must be set to “Multiple”.
      </p>
      <p>
        Then, click the Sprite Editor button in the Inspector. A new window should pop up displaying the sprite sheet. From there, if each sprite is the same size, and if the sheet is arrayed in rows and columns on the sheet, the Slice tool can be used to easily separate the sprites out. From the “Slice” menu, the Type can be changed to either “Grid by Cell Size” or “Grid by Cell Count”. Then, one may set the number pixels per sprite (Cell Size) or the total number of rows and columns the sheet should be broken into (Cell Count).
      </p>
      <p>
        Alternatively, if the sprites are not arrayed evenly, the sprite sheet may be sliced in three other ways. First, the Slice tool may be used with the Type set to “Automatic”. This generates a set of square outlines around each distinct sprite space. Second, one can click and drag the mouse to create a similar square outline around the specified area. Finally, one can use the Custom Outline feature under the Sprite Editor menu to make outlines with more complex shapes. Similarly, the Custom Physics Shapes feature can create more complex outlines that will specifically interact with the physics engine.
      </p>
    </section>
    <section id="Animations" className="main-section">
      <header>Animations</header>
      <p>
        Sprites and sprite sheets can both be used for animations that play during gameplay. Once a sprite has been added to the Scene, an animation can be added by clicking the Animation window (by default, near the middle next to the Project window), and then selecting the appropriate object in the Hierarchy. By clicking the “Create” Button, an Animator is created for the object, and a new animation can be named.
      </p>
      <p>
        From here, each frame for the animation can be dragged into the Animation editor, with each line corresponding to one frame. The “Samples” feature indicates the number of frames per second, which may be altered.
      </p>
      <p>
        Other properties, such as sprite position, color, or rotation may also be animated. Using the Add Property button, these attributes can be added to the animation and changed in sync with the other properties. The red Record button helps accomplish this by allowing changes to occur on a per-frame level.
      </p>
      <p>
        Finally, the Add Event icon may be used to sync animation frames with function calls. By adding an event to an animation frame, a function from any of the scripts that the given object has as a component will be called once that animation frame occurs in-game.
      </p>
    </section>
    <section id="Tilemaps" className="main-section">
      <header>Tilemaps</header>
      <p>
        Another common use for sprites/sheets in Unity 2D is for tilesets, which are grid-based layouts, often composed of square sprites. Sprites can be registered as tiles by adding them to a tile palette; the Tile Palette window can be added as follows:
      </p>
      <div className="code-div">
        <code>Window -{'>'} 2D -{'>'} Tile Palette</code>
      </div>
      <p>
        By selecting “Create New Palette”, a new set of tiles can be defined. To add tiles to a palette, drag the applicable images (sliced, if contained on a sprite sheet) into the window. Any alterations to the tiles already in the palette can be achieved using the Edit button.
      </p>
      <p>
        To add a tilemap to your Scene, right click in the Hierarchy, hover to 2D Object, and select Tilemap. This adds a grid to the scene at a specific layer; multiple tilemaps can be added and layered by changing the Order in Layer setting on the Tilemap Renderer component. From there, tiles may be added to the project by selecting the proper Active Tilemap in the Tile Palette, selecting a tile, and painting it onto the Scene.
      </p>
    </section>
    <section id="Pixel_Perfect_Camera" className="main-section">
      <header>Pixel Perfect Camera</header>
      <p>
        For users creating games with pixel art, some may find the standard camera inappropriate for their project. This is mainly noticeable during gameplay in which an object moves; often, the standard camera will squish or stretch individual pixels, taking away from the crispness that is desired with pixel art. With Unity’s Pixel Perfect Camera, these issues are resolved. To add the Pixel Perfect package to the project, click the following:
      </p>
      <code>Window -{'>'} Project Manager -{'>'} Click “All” Tab -{'>'} Select “2D Pixel Perfect” package -{'>'} Install</code>
      <p>
        Then, on each of the cameras in the Hierarchy, click the Add Component button, and select “Pixel Perfect Camera”. From there, the Assets Pixels Per Unit should be set to the same value as the Pixels Per Unit for each of the project’s sprites. The Reference Resolution defines the ideal window size in pixels. By checking the Upscale Render Texture box, the camera will attempt to meet this Reference Resolution while maintaining the screen ratio, upscaling the sprites if necessary.
      </p>
    </section>
    <section id="Lights" className="main-section">
      <header>Lights</header>
      <p>
        Using the Universal Render Pipeline, lights which are specifically designed to interact with 2D space may be added to a project. After installing the URP package (shown above), a Pipeline Asset must be added to the game. To do this, right click on the Project window as select the following:
      </p>
      <div className="code-div">
        <code>Create -{'>'} Rendering -{'>'} Universal Render Pipeline -{'>'} Pipeline Asset (Forward Renderer)</code>
      </div>
      <p>
        To make this the official Pipeline asset for the game, start from the top toolbar and click the following:
      </p>
      <div className="code-div">
        <code>Edit -{'>'} Project Settings -{'>'} Click “Graphics” Tab -{'>'} Change “Scriptable Render Pipeline Asset” to the new Pipeline Asset</code>
      </div>
      <p>
        From here, some or all of the objects in the scene may be miscolored due to the project’s shaders now needing to be updated. To apply the new changes, click the following:
      </p>
      <div className="code-div">
        <code>Edit -{'>'} Render Pipeline -{'>'} Universal Render Pipeline -{'>'} Upgrade Project Materials to UniversalRP Materials</code>
      </div>
      <p>
        Next, add a 2D renderer to the projects assets in the Project window as follows:
      </p>
      <div className="code-div">
        <code>Create -{'>'} Rendering -{'>'} Universal Render Pipeline -{'>'} 2D Renderer</code>
      </div>
      <p>
        Now, click the Pipeline Asset and add this new renderer to the asset’s Renderer List.
      </p>
      <p>The project now has access to all of Unity’s provided 2D light types. To add a new light to a scene, right click in the Hierarchy and hover over Light and 2D to browse these options. The following are the current list of available lights: </p>
      <ul>
        <li>Parametric Lights</li>
        <li>Freeform Lights</li>
        <li>Sprite Lights</li>
        <li>Point Lights</li>
        <li>Global Lights</li>
      </ul>
      <p>
        Parametric lights conform to an equilateral polygon which the developer can set (hexagon-shaped lights, octagon-shaped lights, etc.). Freeform lights allow the user to create a polygon of any orientation to define the light’s reach. Sprite lights have the shape of the light determined by the outlines of a designated sprite. A Point light starts from a source and fans outward; the radius and angle of this light can be customized by the developer. Finally, the Global Light applies light to all designated layers in the Scene, illuminating everything.
      </p>
    </section>
  </main>
</div>
  )
}

export default TechDoc