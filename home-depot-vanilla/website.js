var allDepItems = document.querySelector(".all-departments-item")
var allDepSubDrop = document.querySelector(".all-departments-subdropdown")
//All Departments subdropdown logic
    allDepItems.addEventListener('mouseenter', () => {
        allDepSubDrop.style.display = 'block'
    })
    allDepItems.addEventListener('mouseleave', () => {
        allDepSubDrop.style.display = 'none'
    })
    allDepSubDrop.addEventListener('mouseenter', () => {
        allDepSubDrop.style.display = 'block'
    })
    allDepSubDrop.addEventListener('mouseleave', () => {
        allDepSubDrop.style.display = 'none'
    })
var HDFK = document.querySelector(".HD-FK")
var HDFKdropdown = document.querySelector(".HD-FK-dropdown")
//HDFK dropdown logic
    HDFK.addEventListener('mouseenter', () => {
        HDFKdropdown.style.display = 'flex'
    })
    HDFK.addEventListener('mouseleave', () => {
        HDFKdropdown.style.display = 'none'
    })
    HDFKdropdown.addEventListener('mouseenter', () => {
        HDFKdropdown.style.display = 'flex'
        HDFK.style.fontWeight = 'bold';
    })
    HDFKdropdown.addEventListener('mouseleave', () => {
        HDFKdropdown.style.display = 'none'
        HDFKbolean = false;
        HDFK.style.fontWeight = 'normal';
    })
var HDFK = document.querySelector(".HD-FK")
var HDFKdropdown = document.querySelector(".HD-FK-dropdown")
//HDFK dropdown logic
    HDFK.addEventListener('mouseenter', () => {
        HDFKdropdown.style.display = 'flex'
    })
    HDFK.addEventListener('mouseleave', () => {
        HDFKdropdown.style.display = 'none'
    })
    HDFKdropdown.addEventListener('mouseenter', () => {
        HDFKdropdown.style.display = 'flex'
        HDFK.style.fontWeight = 'bold';
    })
    HDFKdropdown.addEventListener('mouseleave', () => {
        HDFKdropdown.style.display = 'none'
        HDFK.style.fontWeight = 'normal';
    })
var homeDecor = document.querySelector(".home-decor")
var HDFKsubdropdown = document.querySelector(".HD-FK-subdropdown")
    //HDFK subdropdown logic
    homeDecor.addEventListener('mouseenter', () => {
        HDFKsubdropdown.style.display = 'flex'
    })
    homeDecor.addEventListener('mouseleave', () => {
        HDFKsubdropdown.style.display = 'none'
    })
    HDFKsubdropdown.addEventListener('mouseenter', () => {
        HDFKsubdropdown.style.display = 'flex'
        HDFKdropdown.style.display = 'flex'
    })
    HDFKsubdropdown.addEventListener('mouseleave', () => {
        HDFKsubdropdown.style.display = 'none'
        HDFKdropdown.style.display = 'none'

    })
var DIYprojects = document.querySelector(".DIY-projects")
var DIYdrop = document.querySelector(".DIY-dropdown")
    //DIY projects dropdown logic
    DIYprojects.addEventListener('mouseenter', () => {
        DIYdrop.style.display = 'flex'
        DIYprojects.style.fontWeight = 'bold'
    })
    DIYprojects.addEventListener('mouseleave', () => {
        DIYdrop.style.display = 'none'
        DIYprojects.style.fontWeight = 'normal'
    })
    DIYdrop.addEventListener('mouseenter', () => {
        DIYdrop.style.display = 'flex'
        DIYprojects.style.fontWeight = 'bold'
    })
    DIYdrop.addEventListener('mouseleave', () => {
        DIYdrop.style.display = 'none'
        DIYprojects.style.fontWeight = 'normal'
    })
var IS = document.querySelector(".IS")
var ISdropdown = document.querySelector(".IS-dropdown")
    //Installation and Services dropdown logic
    IS.addEventListener('mouseenter', () => {
        ISdropdown.style.display = 'flex'
        IS.style.fontWeight = 'bold'
    })
    IS.addEventListener('mouseleave', () => {
        ISdropdown.style.display = 'none'
        IS.style.fontWeight = 'normal'
    })
    ISdropdown.addEventListener('mouseenter', () => {
        ISdropdown.style.display = 'flex'
        IS.style.fontWeight = 'bold'
    })
    ISdropdown.addEventListener('mouseleave', () => {
        ISdropdown.style.display = 'none'
        IS.style.fontWeight = 'normal'
    })
var SO = document.querySelector(".SO")
var SOdropdown = document.querySelector(".SO-dropdown")
    //Installation and Services dropdown logic
    SO.addEventListener('mouseenter', () => {
        SOdropdown.style.display = 'flex'
        SO.style.fontWeight = 'bold'
    })
    SO.addEventListener('mouseleave', () => {
        SOdropdown.style.display = 'none'
        SO.style.fontWeight = 'normal'
    })
    SOdropdown.addEventListener('mouseenter', () => {
        SOdropdown.style.display = 'flex'
        SO.style.fontWeight = 'bold'
    })
    SOdropdown.addEventListener('mouseleave', () => {
        SOdropdown.style.display = 'none'
        SO.style.fontWeight = 'normal'
    })