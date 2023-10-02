<h1 align="center">
    <a href="https://github.com/sagnik3788/FlavorFleet">
    <img src="./.github/assets/amplication-logo-light-mode.svg">
    </a>
</h1>

<p align="center">
  <i align="center">Explore the World of Flavor with FlavorFleet 🍔🌮🍰</i>
</p>

<h4 align="center">
  <a href="https://github.com/sagnik3788/FlavorFleet/graphs/contributors">
    <img src="https://img.shields.io/github/contributors-anon/sagnik3788/FlavorFleet?color=yellow&style=flat-square" alt="contributers">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="license">
  </a>
  <br>
  <a href="https://.com/discord">
    <img src="https://img.shields.io/badge/discord-7289da.svg?style=flat-square" alt="discord">
  </a>
  <a href="https://twitter.com/SagnikD80478508">
    <img src="https://img.shields.io/badge/twitter-18a1d6.svg?style=flat-square" alt="twitter">
  </a>
  <a href="https://www.youtube.com">
    <img src="https://img.shields.io/badge/youtube-d95652.svg?style=flat-square&" alt="youtube">
  </a>
</h4>

<p align="center">
    <img src="./public/image/src-main.jpg" alt="Dashboard"/>
</p>


## Introduction

`Flavorfleet` is an innovative and open-source culinary platform designed to redefine the way we explore, create, and enjoy food experiences. Our mission is to inspire food enthusiasts, from home cooks to professional chefs, by providing a wealth of resources and tools to elevate their culinary journeys.

At Flavoorfleet, we believe that cooking should be an enjoyable and accessible experience for everyone. Whether you're a seasoned chef looking for new inspirations or a novice eager to learn the art of cooking, our platform is tailored to cater to your culinary aspirations.

Whether you're planning a special dinner, exploring new cuisines, or simply looking for everyday cooking inspiration, Flavoorfleet is your go-to platform for all things food-related. Join us on this gastronomic adventure and make every meal a memorable experience.

Embark on a culinary journey like never before with Flavoorfleet, your ultimate destination for exploring, creating, and savoring unforgettable food experiences.

<details open>
<summary>
 Features
</summary> <br />

<p align="center">
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/9908a54a-7d49-4dbb-8f5e-3e99b7cadf30.png" alt="apis"/>
&nbsp;
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/ff406403-27f7-42b5-9569-d011432f16e5.png" alt="data-models"/>
</p>

<p align="center">
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/62c8d533-8475-4290-abc8-c433c095e68a.png" alt="plugins"/>
&nbsp;
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/9c67a354-a06f-47d1-a118-ab89b775bf91.png" alt="microservices"/>
</p> 
    
<p align="center">
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/a51e166b-07ec-4c80-99ed-8792a81c4064.png" alt="own-your-code"/>
&nbsp;
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/1cca9721-b8d6-425b-a1a9-d10d3cdcc9b8.png" alt="customize-code"/>
</p>
    
</details>

## Usage 

To get started with Amplication, the hosted version of the product can be used. You can get started immediately at [app.amplication.com](https://app.amplication.com). After the login page you will be guided through creating your first service. The [website](https://amplication.com) provides an overview of the application, additional information on the product and guides can be found on the [docs](https://docs.amplication.com).

<details>
<summary>
  Tutorials
</summary> <br />

- [To-do application using Amplication and Angular](https://docs.amplication.com/tutorials/angular-todos)
- [To-do application using Amplication and React](https://docs.amplication.com/tutorials/react-todos)
</details>

## Development

Alternatively to using the hosted version of the product, Amplication can be ran local for code generation purposes or contributions - if so please refer to our [contributing](#contributing_anchor) section.

<details open>
<summary>
Pre-requisites
</summary> <br />
To be able to start development on amplication make sure that you have the following pre-requisites installed:

###

- Node.js
- Docker
- Git
</details>

<details open>
<summary>
Running Amplication
</summary> <br />

> **Note**
> It is also possible to start development with GitHub Codespaces, when navigating to `< > Code`, select `Codespaces` instead of `Local`. Click on either the `+`-sign or the `Create codespace on master`-button.

Amplication is using a monorepo architecture - powered by <a href="https://nx.dev">Nx Workspaces</a> - where multiple application and libraries exist in a single repository. To setup a local development environment the following steps can be followed:

###

1. Clone the repository and install dependencies:
```shell
git clone https://github.com/amplication/amplication.git && cd amplication && npm install
```

2. Run the setup script, which takes care of installing dependencies, building packages and setting up the workspace:
```shell
npm run setup:dev
```

3. Option 1: Running the required infrastructure - view infrastructure component logs


```shell
npm run docker:dev
```
3. Option 2: Running the required infrastructure - run the infrastructure components in background
```shell
npm run docker:dev -- -d
```

4. Apply database migrations
```shell
npm run db:migrate:deploy
```

5. To start developing, run one or more of the applications available under `serve:[application]` scripts of the package.json.

```shell
# running the server component
npm run serve:server

# running the client component
npm run serve:client

# running the data-service-generator component
npm run serve:dsg

# running the git-pull-request-service component
npm run serve:git

# running the plugin-api component
npm run serve:plugins
```

> **Note**
> In order to run the Amplication client properly, both the client and server need to be started by the `npm run serve:[application]` command, aswell as additional component for development on a specific component.

The development environment should now be set up. Additional information on the different application component can be found under packages/`[application]`/README.md file. Happy hacking! 👾
</details>

## Resources

- **[Website](https://amplication.com)** overview of the product.
- **[Docs](https://docs.amplication.com)** for comprehensive documentation.
- **[Blog](https://amplication.com/blog)** for guides and techinical comparisons.
- **[Roadmap](https://amplication.com/#roadmap)** to see what features will be added in the future.
- **[Discord](https://amplication.com/discord)** for support and discussions with the community and the team.
- **[GitHub](https://github.com/amplication/amplication)** for source code, project board, issues, and pull requests.
- **[Twitter](https://twitter.com/amplication)** for the latest updates on the product and published blogs.
- **[YouTube](https://www.youtube.com/c/Amplicationcom)** for guides and technical talks.

<a name="contributing_anchor"></a>
## Contributing

Amplication is an open-source project. We are committed to a fully transparent development process and highly appreciate any contributions. Whether you are helping us fix bugs, proposing new features, improving our documentation or spreading the word - we would love to have you as a part of the Amplication community. Please refer to our [contribution guidelines](./CONTRIBUTING.md) and [code of conduct](./CODE_OF_CONDUCT.md).

- Bug Report: If you see an error message or run into an issue while using Amplication, please create a [bug report](https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A+bug&template=bug.yaml&title=%F0%9F%90%9B+Bug+Report%3A+).

- Feature Request: If you have an idea or you're missing a capability that would make development easier and more robust, please submit a [feature request](https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A+feature+request&template=feature.yml).

- Documentation Request: If you're reading the Amplication docs and feel like the you're missing something, please submit a [documentation request](https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A+docs&template=documentation-request.yaml&title=%F0%9F%93%96+Documentation%3A+).

Not sure where to start? Join our discord and we will help you get started!

<a href="https://amplication.com/discord"><img src="https://amplication.com/images/discord_banner_purple.svg" /></a>

## Contributers

<!---
npx contributer-faces --exclude "*bot*" --limit 70 --repo "https://github.com/amplication/amplication"

change the height and width for each of the contributors from 80 to 50.
--->

[//]: contributor-faces
<a href="https://github.com/goingdust"><img src="https://avatars.githubusercontent.com/u/87334449?v=4" title="goingdust" width="50" height="50"></a>

[//]: contributor-faces

## License

A large part of this project is licensed under the [Apache 2.0](./LICENSE) license. The only expection are the components under the `ee` (enterprise edition) directory, these are licensed under the [Amplication Enterprise Edition](./ee/LICENSE) license.

