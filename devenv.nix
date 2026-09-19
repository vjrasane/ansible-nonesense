{ pkgs, ... }:

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
    nodejs_25

    just
  ];
}
