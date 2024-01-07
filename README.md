<h1 align="center">
    <img src="./public/image/Candy.png" alt="candy" width="50" height="50" style="vertical-align: middle;">
    <font size="10">FlavorFleet</font>
</h1>

<p align="center">
  <i align="center">Explore the World of Flavor with FlavorFleet 🍔🌮🍰</i>
</p>

<h4 align="center">
    <a href="https://github.com/sagnik3788/FlavorFleet/graphs/contributors" style="margin-right: 10px;">
        <img src="https://img.shields.io/github/contributors-anon/sagnik3788/FlavorFleet?color=yellow&style=flat-square" alt="contributers">
    </a>
    <a href="https://opensource.org/licenses/MIT" style="margin-right: 10px;">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="license">
    </a>
    <br>
    <a href="https://.com/discord" style="margin-right: 10px;">
        <img src="https://img.shields.io/badge/discord-7289da.svg?style=flat-square" alt="discord">
    </a>
    <a href="https://twitter.com/SagnikD80478508" style="margin-right: 10px;">
        <img src="https://img.shields.io/badge/twitter-18a1d6.svg?style=flat-square" alt="twitter">
    </a>
    <a href="https://www.youtube.com/watch?v=tHz1eVeVxic" style="margin-right: 10px;">
        <img src="https://img.shields.io/badge/youtube-d95652.svg?style=flat-square&" alt="youtube">
    </a>
</h4>


<p align="center">
    <img src="./public/image/src-main.jpg" alt="Dashboard"/>
</p>

## Table Of Contents 📚 
- [Demo YouTube Version](https://www.youtube.com/watch?v=tHz1eVeVxic&t=0s)
- [Introduction](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#introduction-)
- [Features](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#introduction-)
- [Development](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#development-)
  - [Pre-requisites](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#development-)
  - [Running Flavorfleet](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#development-)
- [Tech Stack](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#tech-stack-)
- [Contributing](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#contributing-)
  - [How to Contribute](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#how-to-contribute-)
- [Mentors](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#mentors-)
- [Contributors](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#contributors--)
- [License](https://github.com/sagnik3788/FlavorFleet/blob/main/README.md#license)

## Demo YouTube Version 📽️

[Demo Video](https://www.youtube.com/watch?v=tHz1eVeVxic&t=0s)

Check out the video above for a visual walkthrough and demo of FlavorFleet. In this video, we showcase the key features and functionality of the project, giving you a closer look at how FlavorFleet works.


## Introduction <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket"  width="50" height="50" style="vertical-align: middle;"/>

Welcome to `Flavorfleet`, your passport to a world of culinary delights. We are an innovative and open-source culinary platform that brings together the finest dishes from every corner of the globe, prepared by top professional chefs hailing from diverse countries.

At Flavorfleet, we're on a mission to redefine the way we explore, create, and savor food experiences. Our extensive collection of delectable dishes showcases the best culinary traditions from around the world. Whether you're a seasoned chef seeking new inspirations or a passionate home cook eager to master the art of cooking, our platform is your gateway to a world of flavors.

From planning special dinners to venturing into uncharted cuisines, Flavorfleet is your trusted companion for all your food-related adventures. Join us on this gastronomic journey and elevate every meal into a memorable experience.

Embark on a culinary voyage like never before with Flavorfleet, your ultimate destination for exploring, creating, and savoring the finest food experiences from across the globe

<details open>
<summary>
 Features
</summary> <br />

<p align="center">
    <img width="49%" src="./public/image/sign-up demo.jpg" alt="apis"/>
&nbsp;
    <img width="49%" src="./public/image/help demo.jpg" alt="data-models"/>
</p>

<p align="center">
    <img width="49%" src="./public/image/chef demo.jpg" alt="plugins"/>
&nbsp;
    <img width="49%" src="./public/image/items demo.png" alt="microservices"/>
</p> 
    
<p align="center">
    <img width="49%" src="./public/image/cart.png" alt="own-your-code"/>
&nbsp;
    <img width="49%" src="./public/image/DB.png" alt="customize-code"/>
</p>
    
</details>

## Development <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" alt="Robot"  width="50" height="50" style="vertical-align: middle;"/>

Alternatively to using the hosted version of the product, Amplication can be ran local for code generation purposes or contributions - if so please refer to our [contributing](#contributing_anchor) section.

<details open>
<summary>
Pre-requisites
</summary> <br />
To be able to start development  make sure that you have the following pre-requisites installed:

###

- Node.js
- Git
</details>

<details open>
<summary>
Running Flavorfleet
</summary> <br />

###

1. Clone the repository :
```shell
git clone https://github.com/sagnik3788/FlavorFleet.git  
```

2. Install Dependencies:
```shell
cd FlavorFleet
npm install
```
3. Build Docker image
```shell
docker build -t flavorfleet .
```
 Run Docker container
```shell
docker run -p 4000:4000 flavorfleet
```
Visit the application: (http://localhost:4000)

Alternatively, you can run the application without Docker:
```shell
# Install Dependencies
npm install


# Run user-server.js
node user-server.js
```

Visit the application: (http://localhost:4000)

The development environment should now be set up. Additional information on the different application component can be found under README.md file. Happy hacking! 👾
</details>

## Tech Stack <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="50" height="50" style="vertical-align: middle;" />

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Middleware:** body-parser
- **ODM (Object Data Modeling):** Mongoose
- **Development Tools:** nodemon, Postman
- **Environment Variables:** dotenv


<a name="contributing_anchor"></a>

## Contributing <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" alt="Handshake"  width="50" height="50" style="vertical-align: middle;" /> 

FlavorFleet is an open-source project, and we welcome contributions from the community. Whether you're interested in fixing bugs, adding new features, improving documentation, or any other form of contribution, we appreciate your involvement.

## How to Contribute <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Page%20with%20Curl.png" alt="Page with Curl"  width="50" height="50" style="vertical-align: middle;" />

1. **Create an Issue:** If you find a bug, have a feature request, or want to work on an improvement, please create an [issue](https://github.com/sagnik3788/FlavorFleet/issues) describing the issue or your proposed change.

2. **Get Assigned:** Once you've created an issue, a project maintainer will review it, assign it to you if necessary, and provide guidance or clarifications.


3. **Work on Your Contribution:** Fork the repository, create a new branch, and start working on your contribution.

4. **Create a Pull Request (PR):** When you're ready, submit a [pull request](https://github.com/sagnik3788/FlavorFleet/pulls) from your branch to the main repository. Ensure your PR includes a clear description of your changes.

5. **Collaborate and Review:** Collaborate with maintainers and other contributors during the review process. Make any necessary updates based on feedback.

6. **Merge:** Once your PR is approved, it will be merged into the main repository.

We appreciate your contributions and look forward to working together to improve FlavorFleet.

## Mentors <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Teacher%20Light%20Skin%20Tone.png" alt="Robot"  width="50" height="50" style="vertical-align: middle;" />

<div align="center">
    <img src="./public/image/slop%203.0.png" alt="SLOP 3.0">
</div>
<div align="center">
    <table>
        <tr>
            <td>Sagnik Das</td>
        </tr>
        <tr>
            <td>
               <img src="./public/image/sagnik.png" alt="Mentor 1" width="120" height="100"> 
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://www.linkedin.com/in/sagnik-das-b550ab224/">LinkedIn</a> | <a href="https://github.com/sagnik3788">GitHub</a>
            </td>
        </tr>
    </table>
</div>



## Contributors  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png" alt="Red Heart"  width="50" height="50" style="vertical-align: middle;" />

- This project thanking all the contributors for having your valuable contribution to our project
- Make sure you show some love by giving ⭐ to our repository

[//]: contributor-faces
<a href="https://github.com/sagnik3788/FlavorFleet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sagnik3788/FlavorFleet" />
</a>


 <!--
    -Made with [contrib.rocks](https://contrib.rocks).
  -->

[//]: contributor-faces

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENCE) file for details. Please note that the components under the `ee` (enterprise edition) directory are also licensed under the MIT License.



