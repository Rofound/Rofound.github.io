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
        shExpMatch(host, "*.cn") ||
        shExpMatch(host, "*.baidu.com") ||
        shExpMatch(host, "*.qq.com") ||
        shExpMatch(host, "*.aliyun.com") ||
        shExpMatch(host, "*.taobao.com") ||
        shExpMatch(host, "*.jd.com") ||
        shExpMatch(host, "*.163.com") ||
        shExpMatch(host, "*.126.com") ||
        shExpMatch(host, "*.bilibili.com") ||
        shExpMatch(host, "*.zhihu.com") ||
        shExpMatch(host, "*.douyin.com") ||
        shExpMatch(host, "*.weixin.qq.com") ||
        shExpMatch(host, "*.bing.com") ||

        shExpMatch(host, "*.cmpo1914.com") ||
        shExpMatch(host, "*.cmhk.com") ||
        shExpMatch(host, "*.cmft.com") ||
        shExpMatch(host, "*.cmhr.com")
    ) {
        return "DIRECT";
    }

    // 其余（含 google）走代理；不要加 DIRECT，避免失败后直连导致打不开
    return "PROXY 127.0.0.1:21080; SOCKS5 127.0.0.1:21080; SOCKS 127.0.0.1:21080";
}
