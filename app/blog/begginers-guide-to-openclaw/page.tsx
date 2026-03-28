import Image from "next/image";
import Link from "next/link";

export default function BegginersGuideToOpenclawPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <article className="mx-auto w-full max-w-3xl text-purple-900">
        <Link
          href="/blog"
          className="text-sm font-medium transition-opacity hover:opacity-70"
        >
          Blog
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">Beginner’s guide to OpenClaw</h1>
        <p className="mt-2 text-sm text-purple-900/60">March 28, 2026</p>
        <figure className="mt-5">
          <Image
            src="/blog/lavendar.jpg"
            alt="Lavender field"
            width={6000}
            height={4000}
            className="w-full rounded-lg border border-purple-200"
            priority
          />
        </figure>

        <p className="mt-6 text-base leading-7 text-purple-900/85">
          Before I give my rough explanation of <strong>what</strong> OpenClaw is, I think it’s first important to
          understand <strong>why</strong> use OpenClaw.
        </p>
        <p className="mt-4 text-base leading-7 text-purple-900/85">
          The first and obvious answer is that it can save you <strong>time</strong> by automating repetitive tasks.
          Second, it can save you <strong>effort</strong> by decreasing manual work. Third, it can save you{" "}
          <strong>money</strong> by reducing labor and tool costs.
        </p>
        <p className="mt-4 text-base leading-7 text-purple-900/85">
          So what is OpenClaw? You can really just think of it as a free or inexpensive AI assistant that can actually
          take actions for you through communication in chat apps (Telegram in our case). Its actions can range from
          checking you into flights to managing your calendar, but in our case I highlight a beginner use case of
          searching through emails.
        </p>
        <p className="mt-4 text-base leading-7 text-purple-900/85">
          <strong>Who is this guide for:</strong> anyone who’s heard of OpenClaw and has been wondering what it is and
          what it can do.
          Consider this your &quot;Hello, world!&quot; to one of the most powerful and worthwhile tools out there.
        </p>
        <p className="mt-4 text-base leading-7 text-purple-900/85">
          You can make OpenClaw <strong>free</strong> using a local model through{" "}
          <a
            href="https://ollama.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
          >
            Ollama
          </a>
          , however a simpler, and <strong>still free method,</strong> is to create a Gemini API key. This API key, although not
          unlimited, is enough to get the job done for this intro!
        </p>
        <p className="mt-4 text-base leading-7 text-purple-900/85">
          Okay now that the overview is done, here is the step by step of setting it up. Note that I have a{" "}
          <strong>mac</strong>, so if you’re using windows or linux this might not be the guide for you!
        </p>

        <h3 className="mt-10 text-2xl font-semibold tracking-tight">Step 0) Ensuring you have Node.js version 22 or higher</h3>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Just so that you don’t think I’m making you install a virus, Node.js is essentially just a tool that lets your
          computer run JavaScript programs. Since OpenClaw is built with JavaScript, you need Node.js for it to work.
        </p>
        <p className="mt-3 text-base leading-7 text-purple-900/85">To check:</p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>Press Command + Space, type Terminal, then press Enter. This will open up your mac terminal.</li>
          <li>Type: node --version</li>
          <li>Press Enter</li>
          <li>If you see a version like v22.1.0, or any version starting with 22 or higher, you are all set</li>
          <li>If you see command not found, or the version is lower than 22, you need to install it</li>
        </ul>
        <p className="mt-4 text-base leading-7 text-purple-900/85">
          Installing Node.js (skip if “node --version” returned 22 or higher)
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>
            Go to this{" "}
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
            >
              link
            </a>
          </li>
          <li>Download the version labeled LTS (should be circled in blue at the bottom left)</li>
          <li>Run the installer and follow the steps!</li>
          <li>Once it finishes, type node --version again to confirm it worked</li>
        </ul>

        <h3 className="mt-10 text-2xl font-semibold tracking-tight">Step 1) Creating a Telegram account</h3>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          We will need a Telegram account in order to communicate with OpenClaw!
        </p>
        <p className="mt-3 text-base leading-7 text-purple-900/85">On your phone:</p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>Download the Telegram app</li>
          <li>Add your phone number when prompted to in the set up</li>
          <li>Add first name and last name</li>
        </ul>
        <p className="mt-3 text-base leading-7 text-purple-900/85">On your mac:</p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>
            Go to this{" "}
            <a
              href="https://web.telegram.org/k/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
            >
              link
            </a>
          </li>
          <li>Follow the set up instructions (Scanning QR on phone from Telegram → Settings → devices)</li>
        </ul>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          For now that’s all we need to do, we will circle back to this once OpenClaw is installed and we are setting
          up.
        </p>

        <h3 className="mt-10 text-2xl font-semibold tracking-tight">Step 2) Creating your API key for OpenClaw to use</h3>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          First, what is an API key? The most straightforward way to think about it is that it’s just a password, that
          only you should ever know, and it allows OpenClaw to use Gemini’s AI.
        </p>
        <p className="mt-3 text-base leading-7 text-purple-900/85">To create one:</p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>
            Click this{" "}
            <a
              href="https://ai.google.dev/gemini-api/docs/api-key"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
            >
              link
            </a>{" "}
            to get brought to Google’s page to create a Gemini API key
          </li>
          <li>Click on the white text in a blue circle that says “Create or view a Gemini API key”</li>
          <li>Will be brought to table with the leftmost column titled “Key”</li>
          <li>
            In that column, click on the blue text which says something like “...xxxx” where x’s are characters or
            numbers
          </li>
          <li>There, under API key, you will find your full key!</li>
          <li>We don’t need it right now, but keep this tab open for now</li>
        </ul>

        <h3 className="mt-10 text-2xl font-semibold tracking-tight">Step 3) Installing OpenClaw!!!!</h3>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Here comes the fun, but a little more complicated part. This (step 3 → step 5) should take ~20 minutes ( 10
          minutes if you’re already tech savvy ).
        </p>
        <p className="mt-3 text-base leading-7 text-purple-900/85">To install:</p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>Open up your terminal again (Command + Space, type Terminal, then press Enter)</li>
          <li>
            Type: curl -fsSL https://openclaw.ai/install.sh | bash
            <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
              <li>If this doesn’t work because of admin issues:</li>
              <li>Type: sudo -v</li>
              <li>Hit enter</li>
              <li>Enter your password as prompted (the characters won’t appear but trust me it is being entered!)</li>
              <li>Then type: curl -fsSL https://openclaw.ai/install.sh | bash</li>
            </ul>
          </li>
        </ul>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Now you will see a bunch of installations going on! What we just did is tell our computer to go to
          “https://openclaw.ai/install.sh” and run that installation script on our mac.
        </p>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Once all the installations are finished, you should see a screen like so in your terminal:
        </p>
        <figure className="mt-5">
          <Image
            src="/blog/openclaw-setup-screen.png"
            alt="OpenClaw setup screen"
            width={1442}
            height={1436}
            className="w-full rounded-lg border border-purple-200"
          />
        </figure>

        <h3 className="mt-10 text-2xl font-semibold tracking-tight">Step 4) Setting up OpenClaw</h3>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Now that we have it installed, we need to set it up!
        </p>
        <p className="mt-3 text-base leading-7 text-purple-900/85">Set up steps:</p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>From that screen we were just on after installing, use your arrow keys to go over to “Yes”, then hit enter</li>
          <li>
            <strong>Setup mode:</strong> Select quickstart. Manual gets more gritty, and for now we just want the
            lowest friction path to get started!
          </li>
          <li>
            <strong>Model/auth provider:</strong> Select Google
          </li>
          <li>
            <strong>Google auth method:</strong> Select Google gemini API key
          </li>
          <li>Enter the API key from step 2 and hit enter</li>
          <li>
            <strong>Default model:</strong> Select gemini-2.5-flash-lite. This is because we are using the free API
            key, so we can’t
            select their most recent and “best” model. Instead we use one of the free ones which is still more than
            enough!
          </li>
          <li>
            <strong>Select channel:</strong> Telegram (Bot API)
            <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
              <li>Open Telegram on your mac, then in the search bar, enter: BotFather</li>
              <li>Run /newbot</li>
              <li>Enter a name (I chose Mr. Claw)</li>
              <li>
                Enter a username (I chose frenchClaw1392_bot, as it must be a unique name and adding french was just
                the first thing that came to mind)
              </li>
              <li>Then you will be done, and store the token, which starts with “123456:ABC...”</li>
            </ul>
          </li>
          <li>
            <strong>Entering Telegram bot token:</strong> select Enter Telegram bot token
          </li>
          <li>Paste in your token from Telegram and hit enter</li>
          <li>
            <strong>Search provider:</strong> Gemini (Google Search)
          </li>
          <li>
            <strong>API key :</strong> Enter the same API key you used for the model
          </li>
          <li>
            <strong>Configure skills now:</strong> Yes
          </li>
          <li>
            <strong>Install missing skill dependencies:</strong> select (by hitting space) himalaya and summarize,
            then hit enter
          </li>
          <li>
            Himalaya will let OpenClaw read and search your emails. Summarize will let OpenClaw condense long emails
            and other text into short summaries. Other ones are useful (like gog to allow OpenClaw to interact with
            your Google calendar and other Google products), but for now let’s just install these two. In the future,
            it will be very easy to install the other dependencies!
          </li>
          <li>
            <strong>Set GOOGLE_PLACES_API_KEY for goplaces :</strong> No
          </li>
          <li>
            <strong>Set NOTION_API_KEY for notion :</strong> No
          </li>
          <li>
            <strong>Set OPENAI_API_KEY for openai-whisper-api :</strong> No
          </li>
          <li>
            <strong>Set ELEVENLABS_API_KEY for sag :</strong> No
          </li>
          <li>
            <strong>Hooks:</strong> skip for now
          </li>
        </ul>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          And now your claw should be hatched! It will ask you a couple questions in the terminal about its
          personality, which you can answer! Here was my answer:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>1) Mr. Claw 2) AI Assistant 3) Calm, professional, and friendly 4) 🦞</li>
        </ul>

        <h3 className="mt-10 text-2xl font-semibold tracking-tight">Step 5) Getting it started on its first task</h3>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          OpenClaw can do many amazing things, but the simplest thing, let’s have it find an email for us! Before we
          talk to OpenClaw about this, we have to do a couple things to set it up.
        </p>
        <p className="mt-3 text-base leading-7 text-purple-900/85">In your gmail (on the web):</p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>Click the settings wheel</li>
          <li>Click “See all the settings”</li>
          <li>Go to the “Forwarding and POP/IMAP” tab on the top</li>
          <li>Make sure &quot;Enable IMAP&quot; is selected</li>
        </ul>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Then, go to the following{" "}
          <a
            href="https://myaccount.google.com/apppasswords"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
          >
            link
          </a>
          :
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>Enter a name for the password, in my case I used: Mr. Claw</li>
          <li>
            Copy the app password that gets created and store it for now. We will use it in our next prompt to Mr.
            Claw!
          </li>
        </ul>
        <p className="mt-3 text-base leading-7 text-purple-900/85">Tell OpenClaw, still in the terminal, the exact following:</p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>
            I want you to link you to my gmail account, john.doe@gmail.com. I have IMAP enabled, and my App password
            is: xxxx xxxx xxxx xxxx
          </li>
        </ul>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          And voila! Your Claw will now be linked to your gmail. You can have it: find specific emails, summarize
          conversations you’ve had with certain people, automatically delete certain emails (if you choose to later set
          that up), and much more! Here are some examples of what you can ask:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-8 text-base leading-7 text-purple-900/85">
          <li>Check my unread emails and summarize anything important</li>
          <li>Look through my inbox for any internship or job-related emails from the last two weeks</li>
          <li>Find any emails with attachments from the last week</li>
        </ul>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Note that you can keep talking to it in the terminal, or you can switch to Telegram! To communicate in
          Telegram, simply message your bot on Telegram (which you named in Step 4) "/start". Then, it will send you
          the exact command, which you just enter into OpenClaw. Once you have linked Telegram and OpenClaw, you can 
          communicate solely through Telegram.
        </p>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Also one last thing before the conclusion! Our Gemini API key has a very small usage rate. If you want
          to continue using OpenClaw, I recommend switching to a paid API key. The usage rates are very cheap! To 
          do so, either restart this process with a paid API key, or follow the steps{" "}
          <a
            href="https://docs.openclaw.ai/gateway/authentication"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
          >
            here
          </a>
          .
        </p>
        <h3 className="mt-10 text-2xl font-semibold tracking-tight">Conclusion</h3>
        <p className="mt-3 text-base leading-7 text-purple-900/85">
          Having it interact with emails is one of the simpler things you can do, but it’s a nice and easy starting
          point for other tasks! Some of those could be automating scheduled tasks or browsing the web and interacting
          with websites.
        </p>
        <p className="mt-3 pb-8 text-base leading-7 text-purple-900/85">
          Agentic AI will likely change the way people work, communicate, and solve problems. I have already seen that
          shift in my own research lab, where I sometimes literally speak to OpenClaw and have it help me program. I do
          not think I am alone in feeling that life is becoming increasingly fast-moving and uncertain, but that is
          exactly why it is so important to invest in yourself and build skills that make you more adaptable and
          purposeful.
        </p>
      </article>
    </main>
  );
}
