import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconToolsKitchen2,
  IconBeer,
  IconPlus,
  IconShoppingCart,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,

    "&:hover": {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    "&, &:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.15
      ),
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) => {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};

const selections = [
  { icon: IconToolsKitchen2, label: "Mangiare" },
  { icon: IconBeer, label: "Bere" },
  { icon: IconPlus, label: "Aggiungi Nuovo" },
];

export const NavbarMinimalColored = (props: {
  active: number;
  setActive: any;
}) => {
  const { active, setActive } = props;

  const links = selections.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  const theme = useMantineTheme();

  return (
    <>
      <Navbar
        height={"100vh"}
        width={{ base: 80 }}
        p="md"
        sx={{
          backgroundColor: theme.primaryColor,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <Center>
          <IconShoppingCart size={32} stroke={2} color={theme.white} />
        </Center>
        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={4}>
            {links}
          </Stack>
        </Navbar.Section>
      </Navbar>
    </>
  );
};

/*
<Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
*/
