import matchesCriteria from "./overview/entity/Filter.js";

mocha.setup('bdd');
const assert = chai.assert;

const webEvent = {
    eventname: "Web Components",
    description: "HTL Leonding Workshop",
    link: "http://www.htl-leonding.at"

};

describe('#overview.entity.Filter', function () {
    it('matchesCriteria_true_emptyEvent', function () {
        assert.isTrue(matchesCriteria({},''));
    });
    it('matchesCriteria_true_webEvent_and_emptyFilter', function () {
        assert.isTrue(matchesCriteria(webEvent,''));
    });
    it('matchesCriteria_true_webEvent_and_matchingFilter', function () {
        assert.isTrue(matchesCriteria(webEvent,'http://www.htl-leonding.at'));
    });
    it('matchesCriteria_true_webEvent_and_partiallyMatchingFilter', function () {
        assert.isTrue(matchesCriteria(webEvent,'leonding'));
    });
    it('matchesCriteria_true_webEvent_and_partiallyMatchingFilter_ignoreCase', function () {
        assert.isTrue(matchesCriteria(webEvent,'leonding'));
    });
})

mocha.run();