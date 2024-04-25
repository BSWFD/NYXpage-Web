import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Modal from "./modal";

function Historyview() {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="font-[RobotoMono] flex flex-col gap-5">
      <div>
        <h1 className="lg:text-[23px] text-lg font-extrabold   bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
          My Stakes & Rewards
        </h1>
      </div>
      <div className="w-full border border-slate-500 rounded-xl lg:px-6 px-3 py-5 relative bg-black bg-opacity-75 flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center w-full h-full py-10 gap-3">
          <img
            src="./assets/images/icon/crypto_wallet.png"
            alt="None"
            className="md:h-24 h-16 w-auto"
          />
          <h1 className="text-center text-xl font-semibold text-gray-100">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

                return (
                  <div>
                    {(() => {
                      if (!connected) {
                        return "Connect your wallet";
                      }

                      return "You have no staked $PAAL";
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </h1>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div>
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          className="w-[170px] clipButton font-[Nippo] h-[40px] text-[15px]"
                          onClick={openConnectModal}
                          type="button"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    return (
                      <button className="w-[170px] clipButton font-[Nippo] h-[40px] text-[15px]" onClick={() => setModalState(true)}>
                        Stake Now
                      </button>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
      {modalState && <Modal setModalState={setModalState} />}
    </div>
  );
}

export default Historyview;
