function appendBannerSelectors(items, parent)
{
    for (var i = 0; i < items; i++) {
        $(parent).append($('<div>'));
    };
}

function checkBannerToSwitch()
{
    selectedBanner = (selectedBanner + 1) % Banners.length;
}

function switchToBanner()
{
    $('#taglines .content').fadeOut(200, function()
    {
        $(this).html(Banners[selectedBanner]);
        $(this).fadeIn(200);
    });
}

function setBannerChangedFeedback()
{
    $('#tag-icons .selected').removeClass('selected');
    $('#tag-icons div:nth-child('+(selectedBanner+1)+')').addClass('selected');
}

function setBanner()
{
    checkBannerToSwitch();
    switchToBanner();
    setBannerChangedFeedback();
};

var selectedBanner = -1;
var Banners = [
    "Why 9 out of every 10 businesses fail to survive even a year?",
    "What makes up a successful business venture?",
    "Is a prototype needed? How can I develop one?",
    "How to make most out of your mentors, investors and VCs?",
    "How much money? Where from? How to use it?",
    "How technology can actually help?",
    "Who is your customer? Why will she pay you?"
];
var BannerSelectors = [];

$(document).ready(function()
{
    appendBannerSelectors(Banners.length, '#tag-icons');
    $('#navitems a').click(function(e)
    {
        $('html, body').scrollTo(this.hash, this.hash);
        e.preventDefault();
    });
    $('#logo a').click(function(e)
    {
        $('html, body').scrollTo(this.hash, this.hash);
        e.preventDefault();
    });
    setBanner();
    setInterval(setBanner, 7000);
});