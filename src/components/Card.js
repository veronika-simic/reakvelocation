import * as React from "react";
import "./Card.css";
export default function Card() {
  return (
    <div class="cards">
      <div class="card card-1">
        <article>
          <h3>BEOGRAD</h3>
          <p class="hidden">
            Belgrade is the capital of the southeast European country of Serbia.
            Its most significant landmark is the Beogradska Tvrđava, an imposing
            fortress at the confluence of the Danube and the Sava rivers.
          </p>
        </article>
      </div>
      <div class="card card-2">
        <article>
          <h3>GUADALAJARA</h3>
          <p class="hidden">
            Guadalajara is a city in western Mexico. It’s known for tequila and
            mariachi music, both born in Jalisco, the state of which Guadalajara
            is the capital.
          </p>
        </article>
      </div>
      <div class="card card-3">
        <article>
          <h3>ZAGREB</h3>
          <p class="hidden">
            Zagreb, Croatia’s northwestern capital, is distinguished by its
            Austro-Hungarian architecture. At its center, Upper Town is the site
            of the Gothic, twin-spired Zagreb Cathedral.
          </p>
        </article>
      </div>
    </div>
  );
}
