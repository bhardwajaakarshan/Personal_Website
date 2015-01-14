/**
 * Created by The Mamba on 1/7/2015.
 */
(function () {
    var app = angular.module('information', []);
    app.controller('ProjectController', function () {
        this.products = infos;
    });

    app.controller('TabController', function () {
        this.tab = 0;

        this.setTab = function (tab) {
            this.tab = tab;
        };

        this.isSet = function (tab) {
            return (this.tab === tab);
        };
    });

    var infos = [
        {
            name: 'Welcome Page',
            welcome: 'Welcome!',
            description:'Click the tabs on the left to see hackathon projects which I have completed. You can also find my Github, LinkedIn, and Twitter handles in the top-right of the page, along with my resume.',
            order: 0
        },
        {
            name: 'HackGT',
            date: 'September, 2014',
            description: 'Exchange O’ Gram is a mobile application which we created to help students perform safer and more systematic transactions of items at a given college. Project for the HackGT intercollegiate hackathon.',
            image: 'http://allennance.com/wp-content/uploads/2014/07/Screen-Shot-2014-07-10-at-2.16.47-PM.png',
            order: 1,
            view: 'http://challengepost.com/software/exchange-o-gram'
        },
        {
            name: 'HackUMBC',
            date: 'October, 2014',
            description: 'Created an algorithm to read in a visual input for a twelve sided Rubik\'s puzzle. The algorithm gives a step by step solution to systematically solve the puzzle. Project for the HackUMBC intercollegiate hackathon.',
            image: 'https://pbs.twimg.com/profile_images/378800000753912302/443f0bcc911196a08536a3b53f05b5b0_400x400.png',
            order: 2,
            view: 'http://hackumbcf14.challengepost.com/submissions/27585-megaminx-solver'
        },
        {
            name: 'HackNC',
            date: 'November, 2014',
            description: 'The Text-to-Braille Writer which we created takes a String input and converts the string to pulses on a braille node which allows individuals who are blind to receive feedback through a sense of touch. Project for the HackNC intercollegiate hackathon.',
            image: 'http://hacknc.us/Spring2014/images/logo_purple.png',
            order: 3,
            view: 'https://www.hackerleague.org/hackathons/hacknc-fall-2014/hacks/the-braille-writer'
        },
        {
            name: 'HackDUKE',
            date: 'November, 2014',
            description: 'The Eclipse Help Room is an Eclipse plugin which allows users to post their queries to a webpage and allow other programmers to help students who have posted on the webpage through a live chat and the ability to see and edit the \'s code in real time. Project for the HackDuke intercollegiate hackathon.',
            image: 'https://pbs.twimg.com/profile_images/437400346508283904/ax97gvDq_400x400.png',
            order: 4,
            view: 'http://hackdukefall2014.challengepost.com/submissions/30144-eclipse-help-room'
        }
    ]
})()
