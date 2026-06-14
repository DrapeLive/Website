import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — BlastOff | Drape",
  description: "Privacy policy for BlastOff — a casual infinite runner game.",
  alternates: {
    canonical: "https://drapelive.in/projects/blastoff/privacy",
  },
};

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <header className="fixed top-0 left-0 right-0 z-50 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
          <Link
            href="/projects/blastoff"
            className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
          >
            <IconArrowLeft size={20} />
            Back to BlastOff
          </Link>
        </div>
      </header>

      <main className="pt-24 md:pt-32 px-5 md:px-0 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-12">
            <strong>Last updated:</strong> June 14, 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">Introduction</h2>
              <p>
                BlastOff (&quot;we&quot;, &quot;our&quot;, &quot;the app&quot;) is a casual
                infinite runner game developed and published by{" "}
                <strong>drapelive</strong>. This privacy policy explains how we
                collect, use, and share your data when you use our app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data We Collect
              </h2>

              <h3 className="text-xl font-bold mb-2">
                Data Transferred to Third-Party Services
              </h3>
              <p className="mb-4">
                The app uses <strong>SilentWolf</strong> (by Brass Harpooner) as
                a backend service for leaderboard functionality. When you achieve
                a high score or view the statistics screen, the following data is
                sent to SilentWolf&apos;s servers at{" "}
                <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">
                  api.silentwolf.com
                </code>
                :
              </p>

              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 mb-8">
                <table className="w-full text-base">
                  <thead>
                    <tr className="bg-[#CFDBC2]">
                      <th className="text-left py-3 px-4 font-bold">Data</th>
                      <th className="text-left py-3 px-4 font-bold">Purpose</th>
                      <th className="text-left py-3 px-4 font-bold">
                        Required?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Device unique identifier (
                        <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">
                          OS.get_unique_id()
                        </code>
                        )
                      </td>
                      <td className="py-3 px-4">
                        Player identification and leaderboard association
                      </td>
                      <td className="py-3 px-4">Yes</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        High score value
                      </td>
                      <td className="py-3 px-4">Leaderboard ranking</td>
                      <td className="py-3 px-4">Yes</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Display name (user-chosen, max 8 characters)
                      </td>
                      <td className="py-3 px-4">Leaderboard display</td>
                      <td className="py-3 px-4">Optional</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Godot Engine version &amp; plugin version
                      </td>
                      <td className="py-3 px-4">Technical compatibility</td>
                      <td className="py-3 px-4">
                        Yes (in HTTP headers)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mb-2">
                Data Stored Locally on Device
              </h3>
              <p className="mb-4">
                The following data is saved locally on your device using a{" "}
                <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">
                  ConfigFile
                </code>{" "}
                at{" "}
                <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">
                  user://blastoff_data.cfg
                </code>{" "}
                and is <strong>never</strong> transmitted to any server:
              </p>

              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 mb-8">
                <table className="w-full text-base">
                  <thead>
                    <tr className="bg-[#CFDBC2]">
                      <th className="text-left py-3 px-4 font-bold">Data</th>
                      <th className="text-left py-3 px-4 font-bold">Section</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">High score</td>
                      <td className="py-3 px-4">Gameplay</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Total stars collected, spent, and current balance
                      </td>
                      <td className="py-3 px-4">Gameplay / Statistics</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">Display name</td>
                      <td className="py-3 px-4">Settings</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Audio volume preferences (per bus)
                      </td>
                      <td className="py-3 px-4">Settings</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Control type preference (guide/touch)
                      </td>
                      <td className="py-3 px-4">Settings</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Background selection preference
                      </td>
                      <td className="py-3 px-4">Settings</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Current rocket skin and color
                      </td>
                      <td className="py-3 px-4">Gameplay</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Difficulty level
                      </td>
                      <td className="py-3 px-4">Gameplay</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">Total play time</td>
                      <td className="py-3 px-4">Statistics</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="py-3 px-4 font-medium">
                        Powerups used count
                      </td>
                      <td className="py-3 px-4">Statistics</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                SilentWolf also stores a session file at{" "}
                <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">
                  user://swsession.save
                </code>{" "}
                containing session lookup and validator tokens (if authentication
                features are used).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                How We Use Your Data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Leaderboard functionality:</strong> Your device ID,
                  display name, and scores are used to display rankings and your
                  position on the leaderboard.
                </li>
                <li>
                  <strong>Game experience:</strong> Locally stored data is used
                  to persist your settings, progress, and preferences across
                  sessions.
                </li>
                <li>
                  <strong>Statistics:</strong> Play time, stars earned/spent, and
                  powerups used are tracked locally for your personal view.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Third-Party Services
              </h2>
              <p className="mb-2">
                <strong>SilentWolf</strong> (Brass Harpooner) —{" "}
                <a
                  href="https://silentwolf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-gray-900"
                >
                  https://silentwolf.com
                </a>
              </p>
              <p>
                SilentWolf provides leaderboard and player data storage
                services. Their servers receive your device ID, scores, display
                name, and technical metadata. SilentWolf&apos;s privacy policy and
                terms of service are available at their website.
              </p>
              <p className="mt-3">
                No other third-party services (analytics, crash reporting,
                advertising, or tracking SDKs) are used in this app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data Security
              </h2>
              <p>
                All network communication with SilentWolf&apos;s API is encrypted
                using HTTPS. The app includes an API key in request headers for
                server authentication. No additional analytics, tracking, or
                advertising SDKs are present.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data Retention
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Server-side:</strong> Your scores and display name
                  remain on SilentWolf&apos;s servers until you change your display
                  name (which triggers deletion of old scores) or upon request.
                </li>
                <li>
                  <strong>Local data:</strong> Data stored on your device
                  persists until you uninstall the app or clear app data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Your Rights and Choices
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Change display name:</strong> You can change your
                  display name at any time in the app. Changing your display name
                  will delete your previous scores from the leaderboard.
                </li>
                <li>
                  <strong>Opt out of leaderboard:</strong> Leaderboard
                  functionality is disabled if the API key is not available.
                </li>
                <li>
                  <strong>Data deletion:</strong> To request deletion of your
                  data from SilentWolf&apos;s servers, please contact us.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Children&apos;s Privacy
              </h2>
              <p>
                This app does not knowingly collect personal information from
                children. The only identifier used is a device-generated unique
                ID, not a real name or email address (unless you choose to
                register with SilentWolf&apos;s authentication forms).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Changes will
                be reflected on the app&apos;s Store Listing page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">Contact</h2>
              <p>
                For questions about this privacy policy or data deletion
                requests, please contact the developer through the Google Play
                Store listing.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
