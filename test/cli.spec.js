const execa = require('execa');

describe('CLI', () => {

  test('should identify modules with postinstall scripts', async() => {
    const {stdout} = await execa('./cli.js', ['./test/seed_node_modules']);
    expect(stdout).toContain('Potentially unsafe scripts found. These should be reviewed for safety');
    expect(stdout).toContain('Module name: fake-module Type: postinstall');
  });

  test('should not identify clean modules', async() => {
    const {stdout} = await execa('./cli.js', ['./test/seed_node_modules']);
    expect(stdout).toContain('Potentially unsafe scripts found. These should be reviewed for safety');
    expect(stdout).not.toContain('fake-module-2');
  });

});
