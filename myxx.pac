function FindProxyForURL(url, host) {
    // 本机、局域网直连（含 100.*）
    if (
        isPlainHostName(host) ||
        host === "127.0.0.1" ||
        host === "localhost" ||
        host === "::1" ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "100.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "172.17.*") ||
        shExpMatch(host, "172.18.*") ||
        shExpMatch(host, "172.19.*") ||
        shExpMatch(host, "172.2*.*") ||
        shExpMatch(host, "172.30.*") ||
        shExpMatch(host, "172.31.*")
    ) {
        return "DIRECT";
    }

    // 国内常见域名直连
    if (
        dnsDomainIs(host, "*.cn") ||
        dnsDomainIs(host, "*.baidu.com") ||
        dnsDomainIs(host, "*.qq.com") ||
        dnsDomainIs(host, "*.aliyun.com") ||
        dnsDomainIs(host, "*.taobao.com") ||
        dnsDomainIs(host, "*.jd.com") ||
        dnsDomainIs(host, "*.163.com") ||
        dnsDomainIs(host, "*.126.com") ||
        dnsDomainIs(host, "*.bilibili.com") ||
        dnsDomainIs(host, "*.zhihu.com") ||
        dnsDomainIs(host, "*.douyin.com") ||
        dnsDomainIs(host, "*.weixin.qq.com") ||
        dnsDomainIs(host, "*.bing.com") ||

        dnsDomainIs(host, "*.cmpo1914.com") ||
        dnsDomainIs(host, "*.cmhk.com") ||
        dnsDomainIs(host, "*.cmft.com") ||
        dnsDomainIs(host, "*.cmhr.com")
    ) {
        return "DIRECT";
    }

    // 其余（含 google）走代理；不要加 DIRECT，避免失败后直连导致打不开
    return "PROXY 127.0.0.1:21080; SOCKS5 127.0.0.1:21080; SOCKS 127.0.0.1:21080";
}
