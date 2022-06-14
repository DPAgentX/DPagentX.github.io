let scrollProcess;
let containers = document.querySelectorAll('.skillSectionNavBarElement');;
let finalConrainers = Array.prototype.slice.call(containers);
let changeOpacityContainers = Array.prototype.slice.call(document.querySelectorAll('.skillContainerDiv'))

document.addEventListener('scroll', () => {
    scrollProcess = document.querySelector("#scrollProgress");
    let totalHeightOfThePage = document.documentElement.scrollHeight;
    let scrollHeightFromTheTop = document.documentElement.scrollTop;
    let windowHeight = document.documentElement.clientHeight;

    let scrolledPercentage = (scrollHeightFromTheTop / (totalHeightOfThePage - windowHeight)) * 100;

    scrollProcess.style.width = Math.round(scrolledPercentage) + "%";

});



document.addEventListener('DOMContentLoaded', () => {

    finalConrainers = Array.prototype.slice.call(containers);
    finalConrainers.forEach((listElement) => {
        listElement.addEventListener('click', (clickedElement) => {
            console.log(clickedElement.target);
            for (let i = 0; i < finalConrainers.length; i++) {
                if (finalConrainers[i] == clickedElement.target) {
                    containers[i].classList.add("Active");
                    changeOpacityContainers[i].style.display = 'flex';

                } else {
                    changeOpacityContainers[i].style.display = 'none';
                    containers[i].classList.remove("Active");
                    changeOpacityContainers[i].classList.remove("active");
                }
            }
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {

    let map = new Map();
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    map.set('--bgcolor', rs.getPropertyValue('--bgcolor'));
    map.set('--dark-navy', rs.getPropertyValue('--dark-navy'));
    map.set('--navy', rs.getPropertyValue('--navy'));
    map.set('--yellow', rs.getPropertyValue('--yellow'));
    map.set('--light-navy', rs.getPropertyValue('--light-navy'));
    map.set('--lightest-navy', rs.getPropertyValue('--lightest-navy'));
    map.set('--dark-slate', rs.getPropertyValue('--dark-slate'));
    map.set('--navy-shadow', rs.getPropertyValue('--navy-shadow'));
    map.set('--slate', rs.getPropertyValue('--slate'));
    map.set('--light-slate', rs.getPropertyValue('--light-slate'));
    map.set('--lightest-slate', rs.getPropertyValue('--lightest-slate'));
    map.set('--white', rs.getPropertyValue('--white'));
    map.set('--green', rs.getPropertyValue('--green'));
    map.set('--primary', rs.getPropertyValue('--primary'));
    map.set('--secondary', rs.getPropertyValue('--secondary'));
    map.set('--aqua', rs.getPropertyValue('--aqua'));
    let checkbox = document.querySelector('#checkbox');
    let x = 1;
    checkbox.addEventListener('change', () => {
        if (x == 1) {
            x = 0;
            console.log('checkbox is clicked');
            r.style.setProperty('--bgcolor', '#ffe4e4');
            r.style.setProperty('--navy', '#ffe4e4');
            r.style.setProperty('--lightest-slate', 'black');
            r.style.setProperty('--light-slate', 'black');
            r.style.setProperty('--green', '#5a213e');
            r.style.setProperty('--slate', '#434044');
            r.style.setProperty('--yellow', 'mediumturquoise');
            r.style.setProperty('--aqua', 'teal');

        } else {
            x = 1;
            map.forEach((value, key, map) => {
                r.style.setProperty(key, value);
            });
            r.style.setProperty('--bgcolor', map.get('--bgcolor'));
            r.style.setProperty('--navy', map.get('--navy'));
            r.style.setProperty('--lightest-slate', map.get('--lightest-slate'));
            r.style.setProperty('--light-slate', map.get('--light-slate'));
            r.style.setProperty('--green', map.get('--green'));
            r.style.setProperty('--slate', map.get('--slate'));
            r.style.setProperty('--yellow', map.get('--yellow'));
            r.style.setProperty('--aqua', map.get('--aqua'));
            console.log('checkbox is unclicked')
        }
    })
});


document.addEventListener('DOMContentLoaded', () => {
    let dropDownMenu = document.querySelector('#navbar');
    let body = document.querySelector('body');
    document.querySelectorAll('.closeMenu').forEach(element => {
        element.addEventListener('click', () => {
            console.log('close menu is clicked');
            body.style.overflow = 'visible';
            dropDownMenu.style.top = '-100%';
        });
    });
    document.querySelector('#hamburger').addEventListener('click', () => {
        console.log('hamburgur is clicked');
        dropDownMenu.style.display = 'flex';
        dropDownMenu.style.top = '0';
        body.style.margin = '0';
        body.style.height = '100%';
        body.style.overflow = 'hidden';
    })
})