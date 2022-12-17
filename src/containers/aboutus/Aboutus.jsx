import React from "react";
import './aboutus.css';

import vk_logo from '../../assets/vklogo.png';
import dinar_img from '../../assets/dinar.jpg';
import tim_img from '../../assets/tim.jpg';
import alex_img from '../../assets/alex.jpg';
import marat_img from '../../assets/marat.jpg';


const Aboutus = () => {
  return(
    <>
      <div class="responsive-container-block outer-container">
        <div class="responsive-container-block inner-container">
          <p class="text-blk heading-text">Our Team
          </p>
          <p class="text-blk sub-heading-text">Our team consists of four students from our university 
          </p>
          <div class="responsive-container-block cards-container">
            <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
              <p class="text-blk name">Timur Zaripov
              </p>
              <p class="text-blk position">Full-Stack developer
              </p>
              <img src={tim_img}
                class="team-member-image" />
              <a href="https://vk.com/zaripovsky" target="_blank"><img
                  src={vk_logo}
                  class="social-media-icon" /></a>
            </div>
          <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
              <p class="text-blk name">Dinar Suleymanov
              </p>
              <p class="text-blk position">Front-End developer
              </p>
              <img src={dinar_img}
                class="team-member-image" />
              <a href="https://vk.com/suleydv" target="_blank"><img
                  src={vk_logo}
                  class="social-media-icon" /></a>
            </div>
          <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
              <p class="text-blk name">Alexander Goglachev
              </p>
              <p class="text-blk position">Back-End developer
              </p>
              <img src={alex_img}
                class="team-member-image" />
              <a href="https://vk.com/gogla4" target="_blank"><img
                  src={vk_logo}
                  class="social-media-icon" /></a>
            </div>
          <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
              <p class="text-blk name">Marat Hafizov
              </p>
              <p class="text-blk position"> Designer
              </p>
              <img src={marat_img}
                class="team-member-image" />
              <a href="https://vk.com/maratkhafizov0" target="_blank"><img
                  src={vk_logo}
                  class="social-media-icon" /></a>
            </div>
          </div>
            <p class="text-blk footer-text">In the team, everyone performs their tasks. Timur was the leader and performed various tasks, Dinar was mostly responsible for the front, Alexander for the software part, Marat was engaged in the design of the site.
            </p>
        </div>
      </div>
    </>
  )
}
export default Aboutus



