import React from "react";
import TeamGithubBadge from "@components/badges/TeamGithubBadge";

interface Wallet {
  name: string;
  website: string;
  teamGithubURL: string;
  walletGithubURL: string;
  tags: string[];
}

interface WalletsTableProps {
  wallets: Wallet[];
  filterBy?: string;
}

const WalletsTable: React.FC<WalletsTableProps> = ({ wallets, filterBy }) => {
  const filteredWallets = filterBy
    ? wallets.filter((wallet) => wallet.tags.includes(filterBy))
    : wallets;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Website</th>
          <th>Team on GitHub</th>
          <th>Wallet Repo</th>
        </tr>
      </thead>
      <tbody>
        {filteredWallets.map((wallet, index) => (
          <tr
            key={index}
            className="nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20"
          >
            <td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600">
              {wallet.name}
            </td>
            <td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600">
              <a
                href={wallet.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {wallet.website}
              </a>
            </td>
            <td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600">
              <TeamGithubBadge
                teamGithubURL={wallet.teamGithubURL}
                text="Team"
              />
            </td>
            <td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600">
              {wallet.walletRepoURL ? (
                <a
                  href={wallet.walletRepoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {wallet.walletRepoURL}
                </a>
              ) : (
                "N/A"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WalletsTable;
