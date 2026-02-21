import { T, Var, Num, Currency, DateTime } from "gt-next";
import { LocaleSelector } from "gt-next";

const user = {
  name: "Elena Rodriguez",
  balance: 12450.75,
  posts: 1847,
  followers: 23591,
  joinDate: new Date("2021-03-15T00:00:00Z"),
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-[family-name:var(--font-geist)] dark:bg-zinc-950">
      <main className="flex w-full max-w-lg flex-col gap-8 px-6 py-16">
        <div className="flex items-center justify-between">
          <T>
            <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Variable Components
            </h1>
          </T>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/variable-components"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-lg font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                ER
              </div>
              <div>
                <T>
                  <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    <Var>{user.name}</Var>
                  </p>
                </T>
                <T>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Member since{" "}
                    <DateTime options={{ dateStyle: "long" }}>
                      {user.joinDate}
                    </DateTime>
                  </p>
                </T>
              </div>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <T>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Posts
                  </p>
                </T>
                <T>
                  <p className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    <Num>{user.posts}</Num>
                  </p>
                </T>
              </div>
              <div>
                <T>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Followers
                  </p>
                </T>
                <T>
                  <p className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    <Num>{user.followers}</Num>
                  </p>
                </T>
              </div>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800" />

            <div>
              <T>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Account Balance
                </p>
              </T>
              <T>
                <p className="mt-1 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
                  <Currency currency="USD">{user.balance}</Currency>
                </p>
              </T>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800" />

            <T>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <Var>{user.name}</Var> has published <Num>{user.posts}</Num>{" "}
                posts and gained <Num>{user.followers}</Num> followers since
                joining on{" "}
                <DateTime options={{ dateStyle: "medium" }}>
                  {user.joinDate}
                </DateTime>
                . Their current account balance is{" "}
                <Currency currency="USD">{user.balance}</Currency>.
              </p>
            </T>
          </div>
        </div>

        <T>
          <p className="text-center text-xs text-zinc-400 dark:text-zinc-600">
            Switch languages to see how numbers, currencies, and dates adapt to
            each locale.
          </p>
        </T>

        <T>
          <div className="rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
              This is an example app built with{" "}
              <a
                href="https://generaltranslation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-700 dark:hover:text-zinc-200"
              >
                General Translation
              </a>{" "}
              to demonstrate internationalization. It is not a real product.
            </p>
          </div>
        </T>
      </main>
    </div>
  );
}
