# smartbrain

**<span style="color:red">Please note that this app is no longer working/maintained due to <a href="https://devcenter.heroku.com/changelog-items/2461">Heroku's decision</a> - where the corresponding backend was hosted - to shut down any previously free resources from 28/11/2022 onwards</span>**

<p align="center">
    <p align="center">
        <a href="https://github.com/papstchaka/smartbrain/actions">
          <img alt="Build and Deploy" src="https://github.com/papstchaka/smartbrain/actions/workflows/gh-pages.yml/badge.svg"/>
        </a>
        <a href="https://github.com/papstchaka/smartbrain/actions">
          <img alt="Build" src="https://github.com/papstchaka/smartbrain/actions/workflows/node.js.yml/badge.svg"/>
        </a>
        <a href="https://github.com/papstchaka/smartbrain/actions">
          <img alt="Code Quality" src="https://github.com/papstchaka/smartbrain/actions/workflows/codeql-analysis.yml/badge.svg"/>
        </a>
        <a href="https://github.com/papstchaka/smartbrain/issues">
          <img alt="Issues" src="https://img.shields.io/github/issues/papstchaka/smartbrain?color=0088ff"/>
        </a>
        <a href="https://github.com/papstchaka/smartbrain/pulls">
          <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/papstchaka/smartbrain?color=0088ff"/>
        </a>
    </p>
</p>

---

<br></br>

Frontend for the smartbrain project


Implementing the frontend webiste of the smart brain project which can be accessed via <a href="https://papstchaka.github.io/smartbrain/" target="_blank">Smart Brain</a>.

Project provides a website you can register and log in to (without email verification). So just register with whatever email you want (they will only be stored on my own SQL-DataBase which I don't care about, nobody will see them). Your passwords will also be stored there but hashed, so it is almost impossible for anyone (including me) to access them. Once logged in you can insert a photo-url (from the web) into the input and the API in the background will detect all faces which occur on the photo. 
<h2 align="center">
  <img src=src/example.PNG alt="Smart Brain" width="800px" />
</h2>


Furthermore, once you are registered you'll get a unique score that tells you the amount of photos analysed by yourself.

Backend-server is implemented due to <a href="https://github.com/papstchaka/smartbrain-api" target="_blank">Smart Brain API</a> and hosted on <a href="https://www.heroku.com/" target="_blank">Heroku</a>.

Implemented by the instructions given from <a href="https://github.com/aneagoie" target="_blank">Andrei Neagioe</a> in his "Zero to Mastery" course on [`Udemy`](https://www.udemy.com/). The original code used to be similar to [`Face-Recognition-Brain`](https://github.com/aneagoie/face-recognition-brain)
