"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.slideInAnimation = animations_1.trigger('slideIn', [
    animations_1.transition('* => *', [
        animations_1.query('.slide-in-bottom', animations_1.style({ opacity: 0, transform: 'translate(0px, 40px)' }), { optional: true }),
        animations_1.query('.slide-in-bottom', animations_1.stagger('40ms', [
            animations_1.animate('400ms 100ms ease', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
        ]), { optional: true }),
        animations_1.query('.slide-in-bottom', [
            animations_1.animate(100, animations_1.style('*'))
        ], { optional: true }),
    ])
]);
exports.heroAnimations = animations_1.trigger('heroAnimation', [
    animations_1.transition('* => *', [
        animations_1.group([
            animations_1.query('.top', animations_1.style({ opacity: 0, transform: 'translateY(20px)' }), { optional: true }),
            animations_1.query('.top', [
                animations_1.animate('400ms 0ms ease', animations_1.style('*'))
            ], { optional: true }),
            animations_1.query('.heading', animations_1.style({ opacity: 0, transform: 'translateY(20px)' }), { optional: true }),
            animations_1.query('.heading', [
                animations_1.animate('400ms 100ms ease', animations_1.style('*'))
            ]),
            animations_1.query('.paragraph', animations_1.style({ opacity: 0, transform: 'translateY(20px)' }), { optional: true }),
            animations_1.query('.paragraph', [
                animations_1.animate('400ms 200ms ease', animations_1.style('*'))
            ], { optional: true }),
            animations_1.query('.btn', animations_1.style({ opacity: 0, transform: 'translateY(40px)' }), { optional: true }),
            animations_1.query('.btn', [
                animations_1.stagger('50ms', [
                    animations_1.animate('200ms ease', animations_1.style('*'))
                ])
            ], { optional: true }),
            animations_1.query('.scroll-container', animations_1.style({ opacity: 0, bottom: '80px' }), { optional: true }),
            animations_1.query('.scroll-container', [
                animations_1.animate('400ms 1000ms', animations_1.style('*'))
            ], { optional: true })
        ])
    ])
]);
exports.fadeAnimation = animations_1.trigger('fadeAnimation', [
    animations_1.transition('* => *', [
        animations_1.query(':enter', animations_1.style({ opacity: 0 }), { optional: true }),
        animations_1.query(':enter', [
            animations_1.stagger('40ms', [
                animations_1.animate('800ms ease', animations_1.style('*'))
            ])
        ], { optional: true })
    ])
]);
//# sourceMappingURL=app.animations.js.map