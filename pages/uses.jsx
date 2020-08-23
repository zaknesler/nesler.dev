import Layout from '../components/Layout'

export default function Uses() {
  return (
    <Layout title="Uses">
      <div className="prose">
        <p>
          This is a collection of software, hardware, and websites I use on a daily basis. More than anything, this is a
          place for me to keep track of everything I use and to act as a catalog if I need to look something up in the
          future.
        </p>
        <p>
          There are a lot of superlatives on this page, but it is only because most of the tools I use are the result of
          years of searching, switching, and customizing until I have found the absolute best for my workflow.
        </p>

        <h4>Development</h4>

        <ul>
          <li>
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            <p>
              I recently started using VS Code as my main editor, and I am quickly falling in love. It is highly
              customizable and has a huge community developing for it. I use{' '}
              <a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">Night Owl Light</a> as my
              light theme and{' '}
              <a href="https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night">Tokyo Night Storm</a> as
              my dark theme.
            </p>
          </li>

          <li>
            <a href="https://sublimetext.com">Sublime Text 3</a>
            <p>
              For the longest time, Sublime has been my editor of choice, and to this day nothing comes close to its
              speed. I use a{' '}
              <a href="https://gist.github.com/zaknesler/436c4d7e6c607321e2a56de9e28795e8">highly-customized</a>,
              minimal theme for <a href="https://github.com/Krypto/sublime-da-ui">DA UI</a>, and my favorite color
              scheme is DA Light, found in <a href="https://github.com/Krypto/sublime-da-cs">DA CS</a>. I will forever
              stand by my $70 purchase.
            </p>
          </li>
          <li>
            <a href="https://brave.com">Brave</a>
            <p>
              I switched to Brave from Chrome for privacy reasons, after multiple failed attempts at trying Firefox. It
              feels like Chrome without the privacy issues, just be sure turn off the silly Brave Rewards feature.
            </p>
          </li>
          <li>
            <a href="https://figma.com">Figma</a>
            <p>Hands-down the best design tool you can use, plus it's web-based and collaborative.</p>
          </li>
          <li>
            <a href="https://laravel.com/docs/valet">Laravel Valet</a>
            <p>Super fast and lightweight local development environment. Amazing solution for Mac developers.</p>
          </li>
          <li>
            <a href="https://laragon.org">Laragon</a>
            <p>The most compact and simplified solution for web development on Windows.</p>
          </li>
          <li>
            <a href="https://iterm2.com">iTerm 2</a>
            <p>My preferred terminal for MacOS. Highly customizable and very reliable.</p>
          </li>
          <li>
            <a href="https://cmder.net">Cmder</a>
            <p>Console emulator for Windows. It's a superb experience on an otherwise developer-unfriendly OS.</p>
          </li>
        </ul>

        <h4>Hosting</h4>

        <ul>
          <li>
            <a href="https://digitalocean.com/?refcode=704e28ee95b8">DigitalOcean</a>
            <p>
              An amazing cloud-hosting provider that offers many amazing additional services. Very easy to spin up a
              droplet to test out projects or software.
            </p>
          </li>
          <li>
            <a href="https://forge.laravel.com">Laravel Forge</a>
            <p>
              A complete life-saver; it makes it incredibly easy to maintain Laravel applications. Everything from
              databases to daemons can be managed on a web interface.
            </p>
          </li>
          <li>
            <a href="https://cloudflare.com">Cloudflare</a>
            <p>I refuse to host a website that doesn't go through Cloudflare.</p>
          </li>
          <li>
            <a href="https://github.com">GitHub</a>
            <p>Huge fan. Since its acquisition by Microsoft it has only been getting better.</p>
          </li>
          <li>
            <a href="https://hover.com">Hover</a>
            <p>
              I've been through at least three other domain registrars; Hover is the only one with a clean UI and
              incredible customer support.
            </p>
          </li>
        </ul>

        <h4>Productivity</h4>

        <ul>
          <li>
            <a href="https://calendar.google.com">Google Calendar</a>
            <p>
              I am adamant about putting every future event into my Calendar. Upcoming events are displayed on my phone
              and I never have to worry about missing anything. Even my college schedule is in here.
            </p>
          </li>
          <li>
            <a href="https://www.alfredapp.com">Alfred</a>
            <p>
              Did someone say productivity? Boy, does this program speed up your workflow. It's literally how I navigate
              on my Mac.
            </p>
          </li>
          <li>
            <a href="https://1password.com">1Password</a>
            <p>Speechless. I couldn't imagine my life without 1Password.</p>
          </li>
          <li>
            <a href="https://bear.app">Bear</a>
            <p>I use Bear because I am a huge fan of Markdown! I take all of my notes for college with this.</p>
          </li>
          <li>
            <a href="https://fastmail.com">FastMail</a>
            <p>
              I use this to handle my domain email addresses. $50 a year for virtually unlimited domains and aliases,
              such a great deal.
            </p>
          </li>
        </ul>

        <h4>Personal</h4>

        <ul>
          <li>
            <a href="https://nordvpn.com">NordVPN</a>
            <p>Reputable, fast, inexpensive. I'm always connected to a VPN and you should be as well.</p>
          </li>
          <li>
            <a href="https://one.google.com">Google One</a>
            <p>
              I use Google One (Google Drive) for backing up important data, including my dotfiles that are symlinked to
              my local drive.
            </p>
          </li>
          <li>
            <a href="https://winmerge.org/">WinMerge</a>
            <p>
              Incredibly useful program for maintaining backups on external drives. It can diff files and directories
              and only copy over changed/new files.
            </p>
          </li>
          <li>
            <a href="https://plex.tv">Plex</a>
            <p>
              A great media streaming solution. Cable/Satellite/Streaming is pretty much dead. Buy your favorite shows
              and movies and own them forever.
            </p>
          </li>
          <li>
            <a href="https://foobar2000.com">Foobar2000</a>
            <p>What year is it again? Yeah I still use Foobar cause I love FLAC, baby!</p>
          </li>
          <li>
            <a href="https://spotify.com">Spotify</a>
            <p>Because FLACs are not very portable and it's great to discover new artists.</p>
          </li>
        </ul>

        <h4>Hardware</h4>

        <ul>
          <li>
            <strong>13" MacBook Pro &ndash; 2016</strong>
            <p>2.9 GHz Dual-core i5, 8 GB 2133 MHz. Light, portable, and fast!</p>
          </li>
          <li>
            <strong>Custom Windows 10 PC</strong>
            <p>
              I built this PC in ~2014 and I've been slowly upgrading its specs ever since; it's something I've put
              quite a lot of work into, and I am very happy with it!
            </p>

            <h5 className="-mb-1">Specs</h5>
            <ul className="leading-snug">
              <li>i7-7700K @4.8 GHz</li>
              <li>EVGA GeForce GTX 970 SSC</li>
              <li>16 GB Corsair Vengeance DDR4 3200MHz</li>
              <li>Asus PRIME Z270-A ATX Motherboard</li>
              <li>Samsung 970 EVO 500 GB M.2 NVME SSD</li>
              <li>Samsung 850 EVO 250 2.5" SSD</li>
              <li>WD Black 2TB 7200RPM Interal HDD</li>
              <li>WD Blue 4TB 5400RPM Interal HDD</li>
              <li>EVGA SuperNOVA G2 750W 80+ Gold PSU</li>
              <li>Corsair H100i</li>
              <li>Fractal Design Meshify C</li>
            </ul>

            <h5 className="-mb-1">Peripherals</h5>
            <ul className="leading-snug">
              <li>WASD Keyboards CODE &ndash; Cherry MX Brown</li>
              <li>SteelSeries Rival 600 Optical Mouse</li>
              <li>LG 27GL850-B 27 144Hz 2K IPS Monitor</li>
              <li>Dell P2418D 23.8" 2K IPS Monitor</li>
              <li>WD 5TB Elements Backup HDD</li>
              <li>WD 4TB My Passport Backup HDD</li>
              <li>Focusrite Scarlett 2i2</li>
              <li>MXL 990 Condenser Microphone</li>
              <li>2x Mackie MR524 Studio Monitors</li>
              <li>Sennheiser HD 58X Jubilee Open-back</li>
              <li>Audio-Technica ATH-MSR7 Closed-back</li>
            </ul>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
