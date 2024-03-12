describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a tr to $serverTable on updateServerTable()', function() {
    allServers['server1'] = { serverName: 'John' };

    updateServerTable();

    expect(document.querySelector('#serverTable tr')).not.toEqual(null);
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
