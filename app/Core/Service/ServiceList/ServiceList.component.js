import template from './ServiceList.template.html'

class ServiceListController {
    constructor() {
        this.componentName = 'ServiceListComponent';
        this.services = [
            {
                title: 'Hair Cut',
                company: 'Beauty and the barber',
                description: 'Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its' +
                ' things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable ' +
                'earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper ' +
                'offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am. ',
                availability: 'Mon-Friday, 8:00-21:00',
                spaces: 7,
                duration: '1',
                price: 5
            },
            {
                title: 'Beard Trimming',
                company: "Please don't ask",
                description: 'Why painful the sixteen how minuter looking nor. Subject but why ten earnest husband imagine sixteen brandon. ' +
                'Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they. Stuff at avoid of ' +
                'sense small fully it whose an. Ten scarcely distance moreover handsome age although. As when have find fine or said no ' +
                'mile. He in dispatched in imprudence dissimilar be possession unreserved insensible. She evil face fine calm have now. ' +
                'Separate screened he outweigh of distance landlord. ',
                availability: 'Mon-Fri',
                spaces: 7,
                duration: '1h',
                price: 5
            },
            {
                title: 'Prettyfy',
                company: 'Magic Mirror',
                description: 'Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure ' +
                'so of. Now improving and one sincerity intention allowance commanded not. Oh an am frankness be necessary earnestly ' +
                'advantage estimable extensive. Five he wife gone ye. Mrs suffering sportsmen earnestly any. In am do giving to afford ' +
                'parish settle easily garret. ',
                availability: 'Sat',
                spaces: 1,
                duration: '3h',
                price: 2000
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
