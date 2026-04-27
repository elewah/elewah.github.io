/*!
    Title: Abdelrahman Elewah Portfolio
    Description: Portfolio scripts — timeline, nav, typed text, scroll reveal.
*/

(function($) {

    // Show current year
    $("#current-year").text(new Date().getFullYear());

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({ scrollTop: scrollDistance + 'px' }, 500);
    });

    // Build experience timeline
    $('#experience-timeline').each(function() {
        $this = $(this);
        $userContent = $this.children('div');

        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-code"></i></div>');
        });

        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) {
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });
    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e) {
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    // ── Typed text effect for hero subtitle ──────────────────────────────────

    var roles = [
        'AI Integration Lead',
        'LLM Engineer',
        'RAG Architect',
        'Agentic AI Builder',
        'ML Researcher'
    ];
    var roleIndex = 0;
    var charIndex  = 0;
    var isDeleting = false;
    var typingDelay   = 80;
    var deletingDelay = 40;
    var pauseDelay    = 2000;
    var el = document.getElementById('typed-text');

    function type() {
        if (!el) return;
        var currentRole = roles[roleIndex];

        if (isDeleting) {
            el.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        var delay = isDeleting ? deletingDelay : typingDelay;

        if (!isDeleting && charIndex === currentRole.length) {
            delay = pauseDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, 600);

    // ── Scroll reveal with IntersectionObserver ───────────────────────────────

    var revealEls = document.querySelectorAll('#about, #experience, #education, #publications, #projects, #skills, #contact, .education-block, .project, .publication-block');

    revealEls.forEach(function(el) {
        el.classList.add('reveal');
    });

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.reveal').forEach(function(el) {
            observer.observe(el);
        });
    } else {
        // Fallback for old browsers
        document.querySelectorAll('.reveal').forEach(function(el) {
            el.classList.add('is-visible');
        });
    }

})(jQuery);
