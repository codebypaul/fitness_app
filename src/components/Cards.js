import React from "react";
import { AuthBtn } from "./Buttons";

function Cards() {
  return (
    <div className="cards">
      <div class="card">
        <img
          class="card-img-top"
          src="https://i.ibb.co/tMPvK6m/brooke-lark-W9-OKrx-Bqi-ZA-unsplash.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            Get the best meals meals to produce incredible results
          </p>
        </div>
        <a href="nutrition" class="btn btn-outline-danger">
          View Meals
        </a>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            Find the best workouts to target specific areas to maximise gains!
          </p>
        </div>
        <a href="/workouts" class="btn btn-outline-danger">
          View Workouts
        </a>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://images.unsplash.com/photo-1574269252556-89926e7c5805?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            Need a plan to help you get the best of both worlds ? We got you!
          </p>
        </div>
        <a href="plans" class="btn btn-outline-danger">
          View Plans
        </a>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://images.unsplash.com/photo-1574689211272-bc14e289e223?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            Read the latest blogs from some of the most elite bodybuilders and
            nutrition experts.
          </p>
        </div>
        <a href="#" class="btn btn-outline-danger">
          Read Blogs
        </a>
      </div>
    </div>
  );
}

export default Cards;
