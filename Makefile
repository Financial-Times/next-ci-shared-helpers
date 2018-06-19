install:
	@echo '#!/bin/sh\n\nnpx --package @financial-times/secret-squirrel@^2.9.0 secret-squirrel' > .git/hooks/pre-commit;
	@echo '#!/bin/sh\n\nnpx --package @financial-times/secret-squirrel@^2.9.0 secret-squirrel-commitmsg' > .git/hooks/commit-msg;
	@chmod +x .git/hooks/pre-commit .git/hooks/commit-msg;
	@echo "Installed pre-commit and commit-msg .git/hooks for @financial-times/secret-squirrel";
