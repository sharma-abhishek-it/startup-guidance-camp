function appendBannerSelectors(items, parent)
{
    for (var i = 0; i < items; i++) {
        $(parent).append($('<div>'));
    };
}

function checkBannerToSwitch(dir)
{
    if (dir == -1 && selectedBanner == 0)
    {
        selectedBanner = Banners.length - 1
    }
    else
    {
        selectedBanner = (selectedBanner + dir) % Banners.length;
    }
}

function switchToBanner()
{
    $(lastSelectedBanner).fadeOut(200, function()
    {
        lastSelectedBanner = Banners[selectedBanner];
        $(lastSelectedBanner).fadeIn(200);
    });
}

function setBannerChangedFeedback()
{
    $('#tag-icons .selected').removeClass('selected');
    $('#tag-icons div:nth-child('+(selectedBanner+1)+')').addClass('selected');
}

function setBanner(dir)
{
    dir = dir || 1;
    checkBannerToSwitch(dir);
    switchToBanner();
    setBannerChangedFeedback();
};

var bannerChangeInterval = null;
var selectedBanner = 0;
var Banners = $('#taglines .content span');
var lastSelectedBanner = Banners[0];

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
    $('.icon-left-open').click(function(){
        clearInterval(bannerChangeInterval);
        setBanner(-1);
        bannerChangeInterval = setInterval(setBanner, 6000);    
    });
    $('.icon-right-open').click(function(){
        clearInterval(bannerChangeInterval);
        setBanner();
        bannerChangeInterval = setInterval(setBanner, 6000);    
    });

    setBannerChangedFeedback();

    bannerChangeInterval = setInterval(setBanner, 6000);
});