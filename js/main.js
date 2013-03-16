var selectedBanner = 0;
var Banners = [
    "Why 9 of every 10 starting businesses fail?",
    "Investors don’t give attention? Why will they!",
    "Do I need a prototype? Yes you do!",
    "Alright Prototype. But how do I make one?",
    "So less money. So much to do.",
    "Is marketing a plus or is it everything?",
    "Technology? Nobody told me that will come too?"
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