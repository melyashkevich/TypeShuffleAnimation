import { preloadFonts } from './utils';
import { TypeShuffle } from './typeShuffle';

preloadFonts('biu0hfr').then(() => {
    document.body.classList.remove('loading');

    const textContainer = document.querySelector('#content');

    const texts = [
        "<dt>Name</dt><dd>Alpha McDonald</dd><dt>Profession</dt><dd>Creative Web Developer</dd><dt>Bio</dt><dd>5 years experience - HTML, CSS, JavaScript. Passion for creativity in the digital space. Problem solver. Hiker, guitar player, culinary enthusiast. Constantly seeking new challenges, growth opportunities.Bringing imaginative ideas to life. Skilled in modern web development frameworks such as React and Angular. Strong understanding of UI/UX design principles and ability to create visually appealing and usable websites.</dd><dt>Projects</dt><dd>Eco Explorer, SkyBridge, SparkSail</dd><dt>Awards</dt><dd>Best User Experience Design, Webby Awards 2021</dd>",
        "<dt>Name</dt><dd>Beta McDonald</dd><dt>Profession</dt><dd>Creative Web Developer</dd><dt>Bio</dt><dd>5 years experience - HTML, CSS, JavaScript. Passion for creativity in the digital space. Problem solver. Hiker, guitar player, culinary enthusiast. Constantly seeking new challenges, growth opportunities.Bringing imaginative ideas to life. Skilled in modern web development frameworks such as React and Angular. Strong understanding of UI/UX design principles and ability to create visually appealing and usable websites.</dd><dt>Projects</dt><dd>Eco Explorer, SkyBridge, SparkSail</dd><dt>Awards</dt><dd>Best User Experience Design, Webby Awards 2021</dd>",
    ];

    let counter = 0;
    let ts;

    function toggleElement() {
        if (typeof ts === 'undefined' || (ts instanceof TypeShuffle && !ts.isAnimating)) {
            textContainer.innerHTML = '<div class="content"></div>';

            const textElement = document.querySelector('#content .content');
            textElement.innerHTML = texts[counter];

            ts = new TypeShuffle(textElement);

            ts.trigger('fx6');

            counter++;

            if (counter >= texts.length) {
                counter = 0;
            }
        }

        setTimeout(() => toggleElement(), 7000);
    }

    toggleElement();
});