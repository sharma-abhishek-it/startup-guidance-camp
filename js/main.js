var selectedBanner = 0;
var Banners = [
    "Why 9 out of every 10 businesses fail to survive even a year?",
    "What makes up a successful business venture?",
    "Is a prototype needed? How can I develop one?",
    "How to make most out of your mentors, investors and VCs?",
    "How much money? Where from? How to use it?",
    "How technology can actually help?",
    "Who is your customer? Why will she pay you?"
];
function change_banner(dir)
{

}
$(document).ready(function()
{
    $('#goto-left-banner').mousedown(function()
    {
        if (selectedBanner == 0 )
            return;
        $(this).addClass("mousedown");
    });
    $('#goto-right-banner').mousedown(function()
    {
        if (selectedBanner == Banners.length - 1)
            return;
        $(this).addClass("mousedown");
    });
    $('#goto-left-banner').mouseup(function()
    {
        $(this).removeClass("mousedown");
        setBanner(-1);
    });
    $('#goto-right-banner').mouseup(function()
    {
        $(this).removeClass("mousedown");
        setBanner(1);
    });
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

    function setBanner(dir){
        
        if (selectedBanner == 0 && dir == -1)
        {
            return;
        }
        else if (selectedBanner == Banners.length - 1 && dir == 1)
        {
            return;
        }
        else
        {
            $('#tag-icons').children().removeClass('disabled');
            selectedBanner += dir;
        }
        if (selectedBanner == 0)
        {
            $('#goto-left-banner').addClass('disabled');
        } 
        else if (selectedBanner == Banners.length - 1)
        {
            $('#goto-right-banner').addClass('disabled');
        }
        $('#taglines .content').fadeOut(200, function()
        {
            $(this).html(Banners[selectedBanner]);
            $(this).fadeIn(200);
        });
    };
                
        
});