{ pkgs, config, ... }:

{
  languages.typescript.enable = true;
  languages.python = {
    enable = true;
    package = pkgs.python312;
    venv.enable = true;
    uv = {
      enable = true;
      sync.enable = true;
    };
  };

  packages = with pkgs; [
    nodejs_26
    just
  ];

  env.ANSIBLE_COLLECTIONS_PATH = "${config.env.DEVENV_ROOT}/collections";

  tasks = {
    "ansible:install" = {
      exec = ''
        stamp="${config.env.DEVENV_STATE}/galaxy.stamp"
        if [ requirements.yml -nt "$stamp" ]; then
          ansible-galaxy collection install -r requirements.yml && touch "$stamp"
        fi
      '';
      execIfModified = [
        "requirements.yml"
      ];
      after = [ "devenv:enterShell" ];
    };
    "npm:install" = {
      exec = "npm install";
      execIfModified = [
        "package.json"
        "package-lock.json"
      ];
      after = [ "devenv:enterShell" ];
    };
  };
}
