import template from './ServiceList.template.html'

class ServiceListController {
    constructor() {
        this.componentName = 'ServiceListComponent';
        this.services = [
            {
                title: 'Hair Cut',
                description: 'Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its' +
                ' things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable ' +
                'earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper ' +
                'offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am. ',
                availability: 'Mon-Friday, 8:00-21:00',
                spaces: 7,
                price: 20
            },
            {
                title: 'Hair Cut',
                description: 'Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its' +
                ' things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable ' +
                'earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper ' +
                'offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am. ',
                availability: 'Mon-Fri',
                spaces: 7,
                price: 20
            },
            {
                title: 'Hair Cut',
                description: 'Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its' +
                ' things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable ' +
                'earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper ' +
                'offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am. ',
                availability: 'Mon-Fri',
                spaces: 7,
                price: 20
            }
        ]
    }

    $onInit() {
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const serviceListComponent = {
    controller: ServiceListController,
    controllerAs: '$ctrl',
    template,
    bindings
}
