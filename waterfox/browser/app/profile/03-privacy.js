#filter dumbComments emptyLines substitution

// -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

#ifdef XP_UNIX
  #ifndef XP_MACOSX
    #define UNIX_BUT_NOT_MAC
  #endif
#endif

/****************************************************************************
 * SECTION: TRACKING PROTECTION                                             *
****************************************************************************/

// PREF: allow embedded social content
// Used for social media embeds like tweets, instagram posts, etc.
pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");

// PREF: enhanced tracking protection
pref("browser.contentblocking.category", "strict");

// PREF: enforce TLS 1.0 and 1.1 downgrades as session only
pref("security.tls.version.enable-deprecated", false);

// PREF: battery status tracking
pref("dom.battery.enabled", false);

// PREF: disable UITour backend
pref("browser.uitour.enabled", false);
pref("browser.uitour.url", "");

// PREF: enable Global Privacy Control (GPC)
pref("privacy.globalprivacycontrol.enabled", true);
pref("privacy.globalprivacycontrol.functionality.enabled", true);

/****************************************************************************
 * SECTION: OSCP & CERTS                                                    *
****************************************************************************/

// PREF: disable OCSP fetching
pref("security.OCSP.enabled", 0);

// PREF: enable CRLite
pref("security.remote_settings.crlite_filters.enabled", true);
pref("security.pki.crlite_mode", 2);

/****************************************************************************
 * SECTION: SSL / TLS                                                       *
****************************************************************************/

// PREF: display warning on padlock for broken security
pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// PREF: display advanced information on Insecure Connection warning pages
pref("browser.xul.error_pages.expert_bad_cert", true);

// PREF: disable TLS 1.3 0-RTT
pref("security.tls.enable_0rtt_data", false);

/****************************************************************************
 * SECTION: DISK AVOIDANCE                                                  *
****************************************************************************/

// PREF: prevent media cache from writing to disk in Private Browsing
pref("browser.privatebrowsing.forceMediaMemoryCache", true);

/****************************************************************************
 * SECTION: SHUTDOWN & SANITIZING                                           *
****************************************************************************/

// PREF: set History section to show all options
pref("privacy.history.custom", true);

/****************************************************************************
 * SECTION: HEADERS / REFERERS                                             *
****************************************************************************/

// PREF: control cross-origin referer
pref("network.http.referer.XOriginTrimmingPolicy", 2);

/****************************************************************************
 * SECTION: CONTAINERS                                                      *
****************************************************************************/

// PREF: enable Container Tabs and UI
pref("privacy.userContext.ui.enabled", true);
pref("privacy.userContext.enabled", true);

/****************************************************************************
 * SECTION: WEBRTC                                                         *
****************************************************************************/

// PREF: force WebRTC inside the proxy
pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// PREF: force a single network interface for ICE candidates
pref("media.peerconnection.ice.default_address_only", true);

/****************************************************************************
 * SECTION: SAFE BROWSING                                                  *
****************************************************************************/

// PREF: disable remote Safe Browsing checks
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.provider.google4.gethashURL", "");
pref("browser.safebrowsing.provider.google4.updateURL", "");
pref("browser.safebrowsing.provider.google.gethashURL", "");
pref("browser.safebrowsing.provider.google.updateURL", "");

/****************************************************************************
 * SECTION: MISCELLANEOUS                                                  *
****************************************************************************/

// PREF: enforce Punycode for Internationalized Domain Names
pref("network.IDN_show_punycode", true);

// PREF: remove webchannel whitelist
pref("webchannel.allowObject.urlWhitelist", "");

// PREF: disable signing requirement for extensions
pref("xpinstall.signatures.required", false, locked);

// PREF: disable Quarantined Domains
pref("extensions.quarantinedDomains.enabled", false, locked);

/****************************************************************************
 * SECTION: TELEMETRY                                                      *
****************************************************************************/

// PREF: disable all telemetry
pref("toolkit.telemetry.unified", false, locked);
pref("toolkit.telemetry.enabled", false, locked);
pref("toolkit.telemetry.server", "data:,", locked);
pref("toolkit.telemetry.archive.enabled", false, locked);
pref("toolkit.telemetry.newProfilePing.enabled", false, locked);
pref("toolkit.telemetry.shutdownPingSender.enabled", false, locked);
pref("toolkit.telemetry.updatePing.enabled", false, locked);
pref("toolkit.telemetry.bhrPing.enabled", false, locked);
pref("toolkit.telemetry.firstShutdownPing.enabled", false, locked);

// PREF: disable Telemetry Coverage
pref("toolkit.telemetry.coverage.opt-out", true, locked);
pref("toolkit.coverage.opt-out", true, locked);
pref("toolkit.coverage.endpoint.base", "", locked);

// PREF: disable Health Reports
pref("datareporting.healthreport.uploadEnabled", false, locked);

// PREF: disable new data submission
pref("datareporting.policy.dataSubmissionEnabled", false, locked);

// PREF: disable Studies
pref("app.shield.optoutstudies.enabled", false, locked);

// PREF: disable Normandy/Shield
pref("app.normandy.enabled", false, locked);
pref("app.normandy.api_url", "", locked);

// PREF: disable crash reports
pref("breakpad.reportURL", "", locked);
pref("browser.tabs.crashReporting.sendReport", false, locked);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false, locked);

// PREF: disable Firefox Home telemetry
pref("browser.newtabpage.activity-stream.feeds.telemetry", false, locked);
pref("browser.newtabpage.activity-stream.telemetry", false, locked);
